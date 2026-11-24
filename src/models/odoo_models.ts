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

export class _unknownModel extends BaseOdooModel<T_unknown> {
    protected readonly model = '_unknown';
}

export class AccountAccountTagModel extends BaseOdooModel<TAccountAccountTag> {
    protected readonly model = 'account.account.tag';
}

export class AccountAccountModel extends BaseOdooModel<TAccountAccount> {
    protected readonly model = 'account.account';
}

export class AccountAccruedOrdersWizardModel extends BaseOdooModel<TAccountAccruedOrdersWizard> {
    protected readonly model = 'account.accrued.orders.wizard';
}

export class AccountAnalyticAccountModel extends BaseOdooModel<TAccountAnalyticAccount> {
    protected readonly model = 'account.analytic.account';
}

export class AccountAnalyticApplicabilityModel extends BaseOdooModel<TAccountAnalyticApplicability> {
    protected readonly model = 'account.analytic.applicability';
}

export class AccountAnalyticDistributionModelModel extends BaseOdooModel<TAccountAnalyticDistributionModel> {
    protected readonly model = 'account.analytic.distribution.model';
}

export class AccountAnalyticLineModel extends BaseOdooModel<TAccountAnalyticLine> {
    protected readonly model = 'account.analytic.line';
}

export class AccountAnalyticPlanModel extends BaseOdooModel<TAccountAnalyticPlan> {
    protected readonly model = 'account.analytic.plan';
}

export class AccountAutoReconcileWizardModel extends BaseOdooModel<TAccountAutoReconcileWizard> {
    protected readonly model = 'account.auto.reconcile.wizard';
}

export class AccountAutomaticEntryWizardModel extends BaseOdooModel<TAccountAutomaticEntryWizard> {
    protected readonly model = 'account.automatic.entry.wizard';
}

export class AccountAutopostBillsWizardModel extends BaseOdooModel<TAccountAutopostBillsWizard> {
    protected readonly model = 'account.autopost.bills.wizard';
}

export class AccountAvataxUniqueCodeModel extends BaseOdooModel<TAccountAvataxUniqueCode> {
    protected readonly model = 'account.avatax.unique.code';
}

export class AccountBankSelectionModel extends BaseOdooModel<TAccountBankSelection> {
    protected readonly model = 'account.bank.selection';
}

export class AccountBankStatementLineTransientModel extends BaseOdooModel<TAccountBankStatementLineTransient> {
    protected readonly model = 'account.bank.statement.line.transient';
}

export class AccountBankStatementLineModel extends BaseOdooModel<TAccountBankStatementLine> {
    protected readonly model = 'account.bank.statement.line';
}

export class AccountBankStatementModel extends BaseOdooModel<TAccountBankStatement> {
    protected readonly model = 'account.bank.statement';
}

export class AccountBatchErrorWizardLineModel extends BaseOdooModel<TAccountBatchErrorWizardLine> {
    protected readonly model = 'account.batch.error.wizard.line';
}

export class AccountBatchErrorWizardModel extends BaseOdooModel<TAccountBatchErrorWizard> {
    protected readonly model = 'account.batch.error.wizard';
}

export class AccountBatchPaymentRejectionModel extends BaseOdooModel<TAccountBatchPaymentRejection> {
    protected readonly model = 'account.batch.payment.rejection';
}

export class AccountBatchPaymentModel extends BaseOdooModel<TAccountBatchPayment> {
    protected readonly model = 'account.batch.payment';
}

export class AccountCashRoundingModel extends BaseOdooModel<TAccountCashRounding> {
    protected readonly model = 'account.cash.rounding';
}

export class AccountChangeLockDateModel extends BaseOdooModel<TAccountChangeLockDate> {
    protected readonly model = 'account.change.lock.date';
}

export class AccountChartTemplateModel extends BaseOdooModel<TAccountChartTemplate> {
    protected readonly model = 'account.chart.template';
}

export class AccountCodeMappingModel extends BaseOdooModel<TAccountCodeMapping> {
    protected readonly model = 'account.code.mapping';
}

export class AccountDuplicateTransactionWizardModel extends BaseOdooModel<TAccountDuplicateTransactionWizard> {
    protected readonly model = 'account.duplicate.transaction.wizard';
}

export class AccountEdiCommonModel extends BaseOdooModel<TAccountEdiCommon> {
    protected readonly model = 'account.edi.common';
}

export class AccountEdiXmlCiiModel extends BaseOdooModel<TAccountEdiXmlCii> {
    protected readonly model = 'account.edi.xml.cii';
}

export class AccountEdiXmlUbl_20Model extends BaseOdooModel<TAccountEdiXmlUbl_20> {
    protected readonly model = 'account.edi.xml.ubl_20';
}

export class AccountEdiXmlUbl_21Model extends BaseOdooModel<TAccountEdiXmlUbl_21> {
    protected readonly model = 'account.edi.xml.ubl_21';
}

export class AccountEdiXmlUbl_a_nzModel extends BaseOdooModel<TAccountEdiXmlUbl_a_nz> {
    protected readonly model = 'account.edi.xml.ubl_a_nz';
}

export class AccountEdiXmlUbl_bis3Model extends BaseOdooModel<TAccountEdiXmlUbl_bis3> {
    protected readonly model = 'account.edi.xml.ubl_bis3';
}

export class AccountEdiXmlUbl_deModel extends BaseOdooModel<TAccountEdiXmlUbl_de> {
    protected readonly model = 'account.edi.xml.ubl_de';
}

export class AccountEdiXmlUbl_efffModel extends BaseOdooModel<TAccountEdiXmlUbl_efff> {
    protected readonly model = 'account.edi.xml.ubl_efff';
}

export class AccountEdiXmlUbl_nlModel extends BaseOdooModel<TAccountEdiXmlUbl_nl> {
    protected readonly model = 'account.edi.xml.ubl_nl';
}

export class AccountEdiXmlUbl_sgModel extends BaseOdooModel<TAccountEdiXmlUbl_sg> {
    protected readonly model = 'account.edi.xml.ubl_sg';
}

export class AccountExternalTaxMixinModel extends BaseOdooModel<TAccountExternalTaxMixin> {
    protected readonly model = 'account.external.tax.mixin';
}

export class AccountFinancialYearOpModel extends BaseOdooModel<TAccountFinancialYearOp> {
    protected readonly model = 'account.financial.year.op';
}

export class AccountFiscalPositionAccountModel extends BaseOdooModel<TAccountFiscalPositionAccount> {
    protected readonly model = 'account.fiscal.position.account';
}

export class AccountFiscalPositionTaxModel extends BaseOdooModel<TAccountFiscalPositionTax> {
    protected readonly model = 'account.fiscal.position.tax';
}

export class AccountFiscalPositionModel extends BaseOdooModel<TAccountFiscalPosition> {
    protected readonly model = 'account.fiscal.position';
}

export class AccountFiscalYearModel extends BaseOdooModel<TAccountFiscalYear> {
    protected readonly model = 'account.fiscal.year';
}

export class AccountFullReconcileModel extends BaseOdooModel<TAccountFullReconcile> {
    protected readonly model = 'account.full.reconcile';
}

export class AccountGroupModel extends BaseOdooModel<TAccountGroup> {
    protected readonly model = 'account.group';
}

export class AccountImportSummaryModel extends BaseOdooModel<TAccountImportSummary> {
    protected readonly model = 'account.import.summary';
}

export class AccountIncotermsModel extends BaseOdooModel<TAccountIncoterms> {
    protected readonly model = 'account.incoterms';
}

export class AccountInvoiceReportModel extends BaseOdooModel<TAccountInvoiceReport> {
    protected readonly model = 'account.invoice.report';
}

export class AccountInvoice_extractWordsModel extends BaseOdooModel<TAccountInvoice_extractWords> {
    protected readonly model = 'account.invoice_extract.words';
}

export class AccountJournalGroupModel extends BaseOdooModel<TAccountJournalGroup> {
    protected readonly model = 'account.journal.group';
}

export class AccountJournalModel extends BaseOdooModel<TAccountJournal> {
    protected readonly model = 'account.journal';
}

export class AccountLock_exceptionModel extends BaseOdooModel<TAccountLock_exception> {
    protected readonly model = 'account.lock_exception';
}

export class AccountMergeWizardLineModel extends BaseOdooModel<TAccountMergeWizardLine> {
    protected readonly model = 'account.merge.wizard.line';
}

export class AccountMergeWizardModel extends BaseOdooModel<TAccountMergeWizard> {
    protected readonly model = 'account.merge.wizard';
}

export class AccountMissingTransactionWizardModel extends BaseOdooModel<TAccountMissingTransactionWizard> {
    protected readonly model = 'account.missing.transaction.wizard';
}

export class AccountMoveLineModel extends BaseOdooModel<TAccountMoveLine> {
    protected readonly model = 'account.move.line';
}

export class AccountMoveReversalModel extends BaseOdooModel<TAccountMoveReversal> {
    protected readonly model = 'account.move.reversal';
}

export class AccountMoveSendBatchWizardModel extends BaseOdooModel<TAccountMoveSendBatchWizard> {
    protected readonly model = 'account.move.send.batch.wizard';
}

export class AccountMoveSendModel extends BaseOdooModel<TAccountMoveSend> {
    protected readonly model = 'account.move.send';
}

export class AccountMoveSendWizardModel extends BaseOdooModel<TAccountMoveSendWizard> {
    protected readonly model = 'account.move.send.wizard';
}

export class AccountMoveModel extends BaseOdooModel<TAccountMove> {
    protected readonly model = 'account.move';
}

export class AccountOnlineAccountModel extends BaseOdooModel<TAccountOnlineAccount> {
    protected readonly model = 'account.online.account';
}

export class AccountOnlineLinkModel extends BaseOdooModel<TAccountOnlineLink> {
    protected readonly model = 'account.online.link';
}

export class AccountPartialReconcileModel extends BaseOdooModel<TAccountPartialReconcile> {
    protected readonly model = 'account.partial.reconcile';
}

export class AccountPaymentMethodLineModel extends BaseOdooModel<TAccountPaymentMethodLine> {
    protected readonly model = 'account.payment.method.line';
}

export class AccountPaymentMethodModel extends BaseOdooModel<TAccountPaymentMethod> {
    protected readonly model = 'account.payment.method';
}

export class AccountPaymentRegisterModel extends BaseOdooModel<TAccountPaymentRegister> {
    protected readonly model = 'account.payment.register';
}

export class AccountPaymentTermLineModel extends BaseOdooModel<TAccountPaymentTermLine> {
    protected readonly model = 'account.payment.term.line';
}

export class AccountPaymentTermModel extends BaseOdooModel<TAccountPaymentTerm> {
    protected readonly model = 'account.payment.term';
}

export class AccountPaymentModel extends BaseOdooModel<TAccountPayment> {
    protected readonly model = 'account.payment';
}

export class AccountReconcileModelLineModel extends BaseOdooModel<TAccountReconcileModelLine> {
    protected readonly model = 'account.reconcile.model.line';
}

export class AccountReconcileModelPartnerMappingModel extends BaseOdooModel<TAccountReconcileModelPartnerMapping> {
    protected readonly model = 'account.reconcile.model.partner.mapping';
}

export class AccountReconcileModelModel extends BaseOdooModel<TAccountReconcileModel> {
    protected readonly model = 'account.reconcile.model';
}

export class AccountReconcileWizardModel extends BaseOdooModel<TAccountReconcileWizard> {
    protected readonly model = 'account.reconcile.wizard';
}

export class AccountReportColumnModel extends BaseOdooModel<TAccountReportColumn> {
    protected readonly model = 'account.report.column';
}

export class AccountReportExpressionModel extends BaseOdooModel<TAccountReportExpression> {
    protected readonly model = 'account.report.expression';
}

export class AccountReportExternalValueModel extends BaseOdooModel<TAccountReportExternalValue> {
    protected readonly model = 'account.report.external.value';
}

export class AccountReportLineModel extends BaseOdooModel<TAccountReportLine> {
    protected readonly model = 'account.report.line';
}

export class AccountReportModel extends BaseOdooModel<TAccountReport> {
    protected readonly model = 'account.report';
}

export class AccountResequenceWizardModel extends BaseOdooModel<TAccountResequenceWizard> {
    protected readonly model = 'account.resequence.wizard';
}

export class AccountRootModel extends BaseOdooModel<TAccountRoot> {
    protected readonly model = 'account.root';
}

export class AccountSecureEntriesWizardModel extends BaseOdooModel<TAccountSecureEntriesWizard> {
    protected readonly model = 'account.secure.entries.wizard';
}

export class AccountSetupBankManualConfigModel extends BaseOdooModel<TAccountSetupBankManualConfig> {
    protected readonly model = 'account.setup.bank.manual.config';
}

export class AccountTaxGroupModel extends BaseOdooModel<TAccountTaxGroup> {
    protected readonly model = 'account.tax.group';
}

export class AccountTaxRepartitionLineModel extends BaseOdooModel<TAccountTaxRepartitionLine> {
    protected readonly model = 'account.tax.repartition.line';
}

export class AccountTaxModel extends BaseOdooModel<TAccountTax> {
    protected readonly model = 'account.tax';
}

export class AccountTransferModelLineModel extends BaseOdooModel<TAccountTransferModelLine> {
    protected readonly model = 'account.transfer.model.line';
}

export class AccountTransferModelModel extends BaseOdooModel<TAccountTransferModel> {
    protected readonly model = 'account.transfer.model';
}

export class AnalyticMixinModel extends BaseOdooModel<TAnalyticMixin> {
    protected readonly model = 'analytic.mixin';
}

export class AnalyticPlanFieldsMixinModel extends BaseOdooModel<TAnalyticPlanFieldsMixin> {
    protected readonly model = 'analytic.plan.fields.mixin';
}

export class ApprovalApproverModel extends BaseOdooModel<TApprovalApprover> {
    protected readonly model = 'approval.approver';
}

export class ApprovalCategoryApproverModel extends BaseOdooModel<TApprovalCategoryApprover> {
    protected readonly model = 'approval.category.approver';
}

export class ApprovalCategoryModel extends BaseOdooModel<TApprovalCategory> {
    protected readonly model = 'approval.category';
}

export class ApprovalProductLineModel extends BaseOdooModel<TApprovalProductLine> {
    protected readonly model = 'approval.product.line';
}

export class ApprovalRequestModel extends BaseOdooModel<TApprovalRequest> {
    protected readonly model = 'approval.request';
}

export class Auth_totpDeviceModel extends BaseOdooModel<TAuth_totpDevice> {
    protected readonly model = 'auth_totp.device';
}

export class Auth_totpWizardModel extends BaseOdooModel<TAuth_totpWizard> {
    protected readonly model = 'auth_totp.wizard';
}

export class AvatarMixinModel extends BaseOdooModel<TAvatarMixin> {
    protected readonly model = 'avatar.mixin';
}

export class AvataxConnectionTestResultModel extends BaseOdooModel<TAvataxConnectionTestResult> {
    protected readonly model = 'avatax.connection.test.result';
}

export class AvataxExemptionModel extends BaseOdooModel<TAvataxExemption> {
    protected readonly model = 'avatax.exemption';
}

export class AvataxValidateAddressModel extends BaseOdooModel<TAvataxValidateAddress> {
    protected readonly model = 'avatax.validate.address';
}

export class BankRecWidgetLineModel extends BaseOdooModel<TBankRecWidgetLine> {
    protected readonly model = 'bank.rec.widget.line';
}

export class BankRecWidgetModel extends BaseOdooModel<TBankRecWidget> {
    protected readonly model = 'bank.rec.widget';
}

export class BarcodeNomenclatureModel extends BaseOdooModel<TBarcodeNomenclature> {
    protected readonly model = 'barcode.nomenclature';
}

export class BarcodeRuleModel extends BaseOdooModel<TBarcodeRule> {
    protected readonly model = 'barcode.rule';
}

export class BarcodesBarcode_events_mixinModel extends BaseOdooModel<TBarcodesBarcode_events_mixin> {
    protected readonly model = 'barcodes.barcode_events_mixin';
}

export class BaseAutomationModel extends BaseOdooModel<TBaseAutomation> {
    protected readonly model = 'base.automation';
}

export class BaseDocumentLayoutModel extends BaseOdooModel<TBaseDocumentLayout> {
    protected readonly model = 'base.document.layout';
}

export class BaseEnableProfilingWizardModel extends BaseOdooModel<TBaseEnableProfilingWizard> {
    protected readonly model = 'base.enable.profiling.wizard';
}

export class BaseImportModuleModel extends BaseOdooModel<TBaseImportModule> {
    protected readonly model = 'base.import.module';
}

export class BaseLanguageExportModel extends BaseOdooModel<TBaseLanguageExport> {
    protected readonly model = 'base.language.export';
}

export class BaseLanguageImportModel extends BaseOdooModel<TBaseLanguageImport> {
    protected readonly model = 'base.language.import';
}

export class BaseLanguageInstallModel extends BaseOdooModel<TBaseLanguageInstall> {
    protected readonly model = 'base.language.install';
}

export class BaseModuleInstallRequestModel extends BaseOdooModel<TBaseModuleInstallRequest> {
    protected readonly model = 'base.module.install.request';
}

export class BaseModuleInstallReviewModel extends BaseOdooModel<TBaseModuleInstallReview> {
    protected readonly model = 'base.module.install.review';
}

export class BaseModuleUninstallModel extends BaseOdooModel<TBaseModuleUninstall> {
    protected readonly model = 'base.module.uninstall';
}

export class BaseModuleUpdateModel extends BaseOdooModel<TBaseModuleUpdate> {
    protected readonly model = 'base.module.update';
}

export class BaseModuleUpgradeModel extends BaseOdooModel<TBaseModuleUpgrade> {
    protected readonly model = 'base.module.upgrade';
}

export class BasePartnerMergeAutomaticWizardModel extends BaseOdooModel<TBasePartnerMergeAutomaticWizard> {
    protected readonly model = 'base.partner.merge.automatic.wizard';
}

export class BasePartnerMergeLineModel extends BaseOdooModel<TBasePartnerMergeLine> {
    protected readonly model = 'base.partner.merge.line';
}

export class BaseModel extends BaseOdooModel<TBase> {
    protected readonly model = 'base';
}

export class Base_importImportModel extends BaseOdooModel<TBase_importImport> {
    protected readonly model = 'base_import.import';
}

export class Base_importMappingModel extends BaseOdooModel<TBase_importMapping> {
    protected readonly model = 'base_import.mapping';
}

export class BillToPoWizardModel extends BaseOdooModel<TBillToPoWizard> {
    protected readonly model = 'bill.to.po.wizard';
}

export class BusBusModel extends BaseOdooModel<TBusBus> {
    protected readonly model = 'bus.bus';
}

export class BusListenerMixinModel extends BaseOdooModel<TBusListenerMixin> {
    protected readonly model = 'bus.listener.mixin';
}

export class BusPresenceModel extends BaseOdooModel<TBusPresence> {
    protected readonly model = 'bus.presence';
}

export class ChangePasswordOwnModel extends BaseOdooModel<TChangePasswordOwn> {
    protected readonly model = 'change.password.own';
}

export class ChangePasswordUserModel extends BaseOdooModel<TChangePasswordUser> {
    protected readonly model = 'change.password.user';
}

export class ChangePasswordWizardModel extends BaseOdooModel<TChangePasswordWizard> {
    protected readonly model = 'change.password.wizard';
}

export class ChangeProductionQtyModel extends BaseOdooModel<TChangeProductionQty> {
    protected readonly model = 'change.production.qty';
}

export class ChooseDeliveryCarrierModel extends BaseOdooModel<TChooseDeliveryCarrier> {
    protected readonly model = 'choose.delivery.carrier';
}

export class ChooseDeliveryPackageModel extends BaseOdooModel<TChooseDeliveryPackage> {
    protected readonly model = 'choose.delivery.package';
}

export class ConfirmStockSmsModel extends BaseOdooModel<TConfirmStockSms> {
    protected readonly model = 'confirm.stock.sms';
}

export class CrmTagModel extends BaseOdooModel<TCrmTag> {
    protected readonly model = 'crm.tag';
}

export class CrmTeamMemberModel extends BaseOdooModel<TCrmTeamMember> {
    protected readonly model = 'crm.team.member';
}

export class CrmTeamModel extends BaseOdooModel<TCrmTeam> {
    protected readonly model = 'crm.team';
}

export class DecimalPrecisionModel extends BaseOdooModel<TDecimalPrecision> {
    protected readonly model = 'decimal.precision';
}

export class DeliveryCarrierModel extends BaseOdooModel<TDeliveryCarrier> {
    protected readonly model = 'delivery.carrier';
}

export class DeliveryPriceRuleModel extends BaseOdooModel<TDeliveryPriceRule> {
    protected readonly model = 'delivery.price.rule';
}

export class DeliveryZipPrefixModel extends BaseOdooModel<TDeliveryZipPrefix> {
    protected readonly model = 'delivery.zip.prefix';
}

export class DigestDigestModel extends BaseOdooModel<TDigestDigest> {
    protected readonly model = 'digest.digest';
}

export class DigestTipModel extends BaseOdooModel<TDigestTip> {
    protected readonly model = 'digest.tip';
}

export class DiscussChannelMemberModel extends BaseOdooModel<TDiscussChannelMember> {
    protected readonly model = 'discuss.channel.member';
}

export class DiscussChannelRtcSessionModel extends BaseOdooModel<TDiscussChannelRtcSession> {
    protected readonly model = 'discuss.channel.rtc.session';
}

export class DiscussChannelModel extends BaseOdooModel<TDiscussChannel> {
    protected readonly model = 'discuss.channel';
}

export class DiscussGifFavoriteModel extends BaseOdooModel<TDiscussGifFavorite> {
    protected readonly model = 'discuss.gif.favorite';
}

export class DiscussVoiceMetadataModel extends BaseOdooModel<TDiscussVoiceMetadata> {
    protected readonly model = 'discuss.voice.metadata';
}

export class ExtractMixinModel extends BaseOdooModel<TExtractMixin> {
    protected readonly model = 'extract.mixin';
}

export class FetchmailServerModel extends BaseOdooModel<TFetchmailServer> {
    protected readonly model = 'fetchmail.server';
}

export class FormatAddressMixinModel extends BaseOdooModel<TFormatAddressMixin> {
    protected readonly model = 'format.address.mixin';
}

export class FormatVatLabelMixinModel extends BaseOdooModel<TFormatVatLabelMixin> {
    protected readonly model = 'format.vat.label.mixin';
}

export class GoogleGmailMixinModel extends BaseOdooModel<TGoogleGmailMixin> {
    protected readonly model = 'google.gmail.mixin';
}

export class HrContractTypeModel extends BaseOdooModel<THrContractType> {
    protected readonly model = 'hr.contract.type';
}

export class HrDepartmentModel extends BaseOdooModel<THrDepartment> {
    protected readonly model = 'hr.department';
}

export class HrDepartureReasonModel extends BaseOdooModel<THrDepartureReason> {
    protected readonly model = 'hr.departure.reason';
}

export class HrDepartureWizardModel extends BaseOdooModel<THrDepartureWizard> {
    protected readonly model = 'hr.departure.wizard';
}

export class HrEmployeeBaseModel extends BaseOdooModel<THrEmployeeBase> {
    protected readonly model = 'hr.employee.base';
}

export class HrEmployeeCategoryModel extends BaseOdooModel<THrEmployeeCategory> {
    protected readonly model = 'hr.employee.category';
}

export class HrEmployeeCvWizardModel extends BaseOdooModel<THrEmployeeCvWizard> {
    protected readonly model = 'hr.employee.cv.wizard';
}

export class HrEmployeePublicModel extends BaseOdooModel<THrEmployeePublic> {
    protected readonly model = 'hr.employee.public';
}

export class HrEmployeeSkillLogModel extends BaseOdooModel<THrEmployeeSkillLog> {
    protected readonly model = 'hr.employee.skill.log';
}

export class HrEmployeeSkillReportModel extends BaseOdooModel<THrEmployeeSkillReport> {
    protected readonly model = 'hr.employee.skill.report';
}

export class HrEmployeeSkillModel extends BaseOdooModel<THrEmployeeSkill> {
    protected readonly model = 'hr.employee.skill';
}

export class HrEmployeeModel extends BaseOdooModel<THrEmployee> {
    protected readonly model = 'hr.employee';
}

export class HrJobModel extends BaseOdooModel<THrJob> {
    protected readonly model = 'hr.job';
}

export class HrManagerDepartmentReportModel extends BaseOdooModel<THrManagerDepartmentReport> {
    protected readonly model = 'hr.manager.department.report';
}

export class HrResumeLineModel extends BaseOdooModel<THrResumeLine> {
    protected readonly model = 'hr.resume.line';
}

export class HrResumeLineTypeModel extends BaseOdooModel<THrResumeLineType> {
    protected readonly model = 'hr.resume.line.type';
}

export class HrSkillLevelModel extends BaseOdooModel<THrSkillLevel> {
    protected readonly model = 'hr.skill.level';
}

export class HrSkillModel extends BaseOdooModel<THrSkill> {
    protected readonly model = 'hr.skill';
}

export class HrSkillTypeModel extends BaseOdooModel<THrSkillType> {
    protected readonly model = 'hr.skill.type';
}

export class HrWorkLocationModel extends BaseOdooModel<THrWorkLocation> {
    protected readonly model = 'hr.work.location';
}

export class HtmlFieldHistoryMixinModel extends BaseOdooModel<THtmlFieldHistoryMixin> {
    protected readonly model = 'html.field.history.mixin';
}

export class IapAccountModel extends BaseOdooModel<TIapAccount> {
    protected readonly model = 'iap.account';
}

export class IapAutocompleteApiModel extends BaseOdooModel<TIapAutocompleteApi> {
    protected readonly model = 'iap.autocomplete.api';
}

export class IapEnrichApiModel extends BaseOdooModel<TIapEnrichApi> {
    protected readonly model = 'iap.enrich.api';
}

export class IapServiceModel extends BaseOdooModel<TIapService> {
    protected readonly model = 'iap.service';
}

export class ImageMixinModel extends BaseOdooModel<TImageMixin> {
    protected readonly model = 'image.mixin';
}

export class IrActionsAct_urlModel extends BaseOdooModel<TIrActionsAct_url> {
    protected readonly model = 'ir.actions.act_url';
}

export class IrActionsAct_windowModel extends BaseOdooModel<TIrActionsAct_window> {
    protected readonly model = 'ir.actions.act_window';
}

export class IrActionsAct_windowViewModel extends BaseOdooModel<TIrActionsAct_windowView> {
    protected readonly model = 'ir.actions.act_window.view';
}

export class IrActionsAct_window_closeModel extends BaseOdooModel<TIrActionsAct_window_close> {
    protected readonly model = 'ir.actions.act_window_close';
}

export class IrActionsActionsModel extends BaseOdooModel<TIrActionsActions> {
    protected readonly model = 'ir.actions.actions';
}

export class IrActionsClientModel extends BaseOdooModel<TIrActionsClient> {
    protected readonly model = 'ir.actions.client';
}

export class IrActionsReportModel extends BaseOdooModel<TIrActionsReport> {
    protected readonly model = 'ir.actions.report';
}

export class IrActionsServerModel extends BaseOdooModel<TIrActionsServer> {
    protected readonly model = 'ir.actions.server';
}

export class IrActionsTodoModel extends BaseOdooModel<TIrActionsTodo> {
    protected readonly model = 'ir.actions.todo';
}

export class IrAssetModel extends BaseOdooModel<TIrAsset> {
    protected readonly model = 'ir.asset';
}

export class IrAttachmentModel extends BaseOdooModel<TIrAttachment> {
    protected readonly model = 'ir.attachment';
}

export class IrAutovacuumModel extends BaseOdooModel<TIrAutovacuum> {
    protected readonly model = 'ir.autovacuum';
}

export class IrBinaryModel extends BaseOdooModel<TIrBinary> {
    protected readonly model = 'ir.binary';
}

export class IrConfig_parameterModel extends BaseOdooModel<TIrConfig_parameter> {
    protected readonly model = 'ir.config_parameter';
}

export class IrCronProgressModel extends BaseOdooModel<TIrCronProgress> {
    protected readonly model = 'ir.cron.progress';
}

export class IrCronTriggerModel extends BaseOdooModel<TIrCronTrigger> {
    protected readonly model = 'ir.cron.trigger';
}

export class IrCronModel extends BaseOdooModel<TIrCron> {
    protected readonly model = 'ir.cron';
}

export class IrDefaultModel extends BaseOdooModel<TIrDefault> {
    protected readonly model = 'ir.default';
}

export class IrDemoModel extends BaseOdooModel<TIrDemo> {
    protected readonly model = 'ir.demo';
}

export class IrDemo_failureModel extends BaseOdooModel<TIrDemo_failure> {
    protected readonly model = 'ir.demo_failure';
}

export class IrDemo_failureWizardModel extends BaseOdooModel<TIrDemo_failureWizard> {
    protected readonly model = 'ir.demo_failure.wizard';
}

export class IrEmbeddedActionsModel extends BaseOdooModel<TIrEmbeddedActions> {
    protected readonly model = 'ir.embedded.actions';
}

export class IrExportsLineModel extends BaseOdooModel<TIrExportsLine> {
    protected readonly model = 'ir.exports.line';
}

export class IrExportsModel extends BaseOdooModel<TIrExports> {
    protected readonly model = 'ir.exports';
}

export class IrFieldsConverterModel extends BaseOdooModel<TIrFieldsConverter> {
    protected readonly model = 'ir.fields.converter';
}

export class IrFiltersModel extends BaseOdooModel<TIrFilters> {
    protected readonly model = 'ir.filters';
}

export class IrHttpModel extends BaseOdooModel<TIrHttp> {
    protected readonly model = 'ir.http';
}

export class IrLoggingModel extends BaseOdooModel<TIrLogging> {
    protected readonly model = 'ir.logging';
}

export class IrMail_serverModel extends BaseOdooModel<TIrMail_server> {
    protected readonly model = 'ir.mail_server';
}

export class IrModelAccessModel extends BaseOdooModel<TIrModelAccess> {
    protected readonly model = 'ir.model.access';
}

export class IrModelConstraintModel extends BaseOdooModel<TIrModelConstraint> {
    protected readonly model = 'ir.model.constraint';
}

export class IrModelDataModel extends BaseOdooModel<TIrModelData> {
    protected readonly model = 'ir.model.data';
}

export class IrModelFieldsSelectionModel extends BaseOdooModel<TIrModelFieldsSelection> {
    protected readonly model = 'ir.model.fields.selection';
}

export class IrModelFieldsModel extends BaseOdooModel<TIrModelFields> {
    protected readonly model = 'ir.model.fields';
}

export class IrModelInheritModel extends BaseOdooModel<TIrModelInherit> {
    protected readonly model = 'ir.model.inherit';
}

export class IrModelRelationModel extends BaseOdooModel<TIrModelRelation> {
    protected readonly model = 'ir.model.relation';
}

export class IrModelModel extends BaseOdooModel<TIrModel> {
    protected readonly model = 'ir.model';
}

export class IrModuleCategoryModel extends BaseOdooModel<TIrModuleCategory> {
    protected readonly model = 'ir.module.category';
}

export class IrModuleModuleDependencyModel extends BaseOdooModel<TIrModuleModuleDependency> {
    protected readonly model = 'ir.module.module.dependency';
}

export class IrModuleModuleExclusionModel extends BaseOdooModel<TIrModuleModuleExclusion> {
    protected readonly model = 'ir.module.module.exclusion';
}

export class IrModuleModuleModel extends BaseOdooModel<TIrModuleModule> {
    protected readonly model = 'ir.module.module';
}

export class IrProfileModel extends BaseOdooModel<TIrProfile> {
    protected readonly model = 'ir.profile';
}

export class IrQwebFieldBarcodeModel extends BaseOdooModel<TIrQwebFieldBarcode> {
    protected readonly model = 'ir.qweb.field.barcode';
}

export class IrQwebFieldContactModel extends BaseOdooModel<TIrQwebFieldContact> {
    protected readonly model = 'ir.qweb.field.contact';
}

export class IrQwebFieldDateModel extends BaseOdooModel<TIrQwebFieldDate> {
    protected readonly model = 'ir.qweb.field.date';
}

export class IrQwebFieldDatetimeModel extends BaseOdooModel<TIrQwebFieldDatetime> {
    protected readonly model = 'ir.qweb.field.datetime';
}

export class IrQwebFieldDurationModel extends BaseOdooModel<TIrQwebFieldDuration> {
    protected readonly model = 'ir.qweb.field.duration';
}

export class IrQwebFieldFloatModel extends BaseOdooModel<TIrQwebFieldFloat> {
    protected readonly model = 'ir.qweb.field.float';
}

export class IrQwebFieldFloat_timeModel extends BaseOdooModel<TIrQwebFieldFloat_time> {
    protected readonly model = 'ir.qweb.field.float_time';
}

export class IrQwebFieldHtmlModel extends BaseOdooModel<TIrQwebFieldHtml> {
    protected readonly model = 'ir.qweb.field.html';
}

export class IrQwebFieldImageModel extends BaseOdooModel<TIrQwebFieldImage> {
    protected readonly model = 'ir.qweb.field.image';
}

export class IrQwebFieldImage_urlModel extends BaseOdooModel<TIrQwebFieldImage_url> {
    protected readonly model = 'ir.qweb.field.image_url';
}

export class IrQwebFieldIntegerModel extends BaseOdooModel<TIrQwebFieldInteger> {
    protected readonly model = 'ir.qweb.field.integer';
}

export class IrQwebFieldMany2manyModel extends BaseOdooModel<TIrQwebFieldMany2many> {
    protected readonly model = 'ir.qweb.field.many2many';
}

export class IrQwebFieldMany2oneModel extends BaseOdooModel<TIrQwebFieldMany2one> {
    protected readonly model = 'ir.qweb.field.many2one';
}

export class IrQwebFieldMonetaryModel extends BaseOdooModel<TIrQwebFieldMonetary> {
    protected readonly model = 'ir.qweb.field.monetary';
}

export class IrQwebFieldOne2manyModel extends BaseOdooModel<TIrQwebFieldOne2many> {
    protected readonly model = 'ir.qweb.field.one2many';
}

export class IrQwebFieldQwebModel extends BaseOdooModel<TIrQwebFieldQweb> {
    protected readonly model = 'ir.qweb.field.qweb';
}

export class IrQwebFieldRelativeModel extends BaseOdooModel<TIrQwebFieldRelative> {
    protected readonly model = 'ir.qweb.field.relative';
}

export class IrQwebFieldSelectionModel extends BaseOdooModel<TIrQwebFieldSelection> {
    protected readonly model = 'ir.qweb.field.selection';
}

export class IrQwebFieldTextModel extends BaseOdooModel<TIrQwebFieldText> {
    protected readonly model = 'ir.qweb.field.text';
}

export class IrQwebFieldTimeModel extends BaseOdooModel<TIrQwebFieldTime> {
    protected readonly model = 'ir.qweb.field.time';
}

export class IrQwebFieldModel extends BaseOdooModel<TIrQwebField> {
    protected readonly model = 'ir.qweb.field';
}

export class IrQwebModel extends BaseOdooModel<TIrQweb> {
    protected readonly model = 'ir.qweb';
}

export class IrRuleModel extends BaseOdooModel<TIrRule> {
    protected readonly model = 'ir.rule';
}

export class IrSequenceDate_rangeModel extends BaseOdooModel<TIrSequenceDate_range> {
    protected readonly model = 'ir.sequence.date_range';
}

export class IrSequenceModel extends BaseOdooModel<TIrSequence> {
    protected readonly model = 'ir.sequence';
}

export class IrUiMenuModel extends BaseOdooModel<TIrUiMenu> {
    protected readonly model = 'ir.ui.menu';
}

export class IrUiViewCustomModel extends BaseOdooModel<TIrUiViewCustom> {
    protected readonly model = 'ir.ui.view.custom';
}

export class IrUiViewModel extends BaseOdooModel<TIrUiView> {
    protected readonly model = 'ir.ui.view';
}

export class IrWebsocketModel extends BaseOdooModel<TIrWebsocket> {
    protected readonly model = 'ir.websocket';
}

export class KpiProviderModel extends BaseOdooModel<TKpiProvider> {
    protected readonly model = 'kpi.provider';
}

export class L10n_it_delivery_noteDelivery_mixinModel extends BaseOdooModel<TL10n_it_delivery_noteDelivery_mixin> {
    protected readonly model = 'l10n_it_delivery_note.delivery_mixin';
}

export class L10n_us1099_boxModel extends BaseOdooModel<TL10n_us1099_box> {
    protected readonly model = 'l10n_us1099_box';
}

export class L10n_us_1099WizardModel extends BaseOdooModel<TL10n_us_1099Wizard> {
    protected readonly model = 'l10n_us_1099.wizard';
}

export class LotLabelLayoutModel extends BaseOdooModel<TLotLabelLayout> {
    protected readonly model = 'lot.label.layout';
}

export class MailActivityMixinModel extends BaseOdooModel<TMailActivityMixin> {
    protected readonly model = 'mail.activity.mixin';
}

export class MailActivityPlanTemplateModel extends BaseOdooModel<TMailActivityPlanTemplate> {
    protected readonly model = 'mail.activity.plan.template';
}

export class MailActivityPlanModel extends BaseOdooModel<TMailActivityPlan> {
    protected readonly model = 'mail.activity.plan';
}

export class MailActivityScheduleModel extends BaseOdooModel<TMailActivitySchedule> {
    protected readonly model = 'mail.activity.schedule';
}

export class MailActivityModel extends BaseOdooModel<TMailActivity> {
    protected readonly model = 'mail.activity';
}

export class MailActivityTypeModel extends BaseOdooModel<TMailActivityType> {
    protected readonly model = 'mail.activity.type';
}

export class MailAliasDomainModel extends BaseOdooModel<TMailAliasDomain> {
    protected readonly model = 'mail.alias.domain';
}

export class MailAliasMixinOptionalModel extends BaseOdooModel<TMailAliasMixinOptional> {
    protected readonly model = 'mail.alias.mixin.optional';
}

export class MailAliasMixinModel extends BaseOdooModel<TMailAliasMixin> {
    protected readonly model = 'mail.alias.mixin';
}

export class MailAliasModel extends BaseOdooModel<TMailAlias> {
    protected readonly model = 'mail.alias';
}

export class MailBlacklistRemoveModel extends BaseOdooModel<TMailBlacklistRemove> {
    protected readonly model = 'mail.blacklist.remove';
}

export class MailBlacklistModel extends BaseOdooModel<TMailBlacklist> {
    protected readonly model = 'mail.blacklist';
}

export class MailBotModel extends BaseOdooModel<TMailBot> {
    protected readonly model = 'mail.bot';
}

export class MailCannedResponseModel extends BaseOdooModel<TMailCannedResponse> {
    protected readonly model = 'mail.canned.response';
}

export class MailComposeMessageModel extends BaseOdooModel<TMailComposeMessage> {
    protected readonly model = 'mail.compose.message';
}

export class MailComposerMixinModel extends BaseOdooModel<TMailComposerMixin> {
    protected readonly model = 'mail.composer.mixin';
}

export class MailFollowersModel extends BaseOdooModel<TMailFollowers> {
    protected readonly model = 'mail.followers';
}

export class MailGatewayAllowedModel extends BaseOdooModel<TMailGatewayAllowed> {
    protected readonly model = 'mail.gateway.allowed';
}

export class MailGuestModel extends BaseOdooModel<TMailGuest> {
    protected readonly model = 'mail.guest';
}

export class MailIceServerModel extends BaseOdooModel<TMailIceServer> {
    protected readonly model = 'mail.ice.server';
}

export class MailLinkPreviewModel extends BaseOdooModel<TMailLinkPreview> {
    protected readonly model = 'mail.link.preview';
}

export class MailMailModel extends BaseOdooModel<TMailMail> {
    protected readonly model = 'mail.mail';
}

export class MailMessageReactionModel extends BaseOdooModel<TMailMessageReaction> {
    protected readonly model = 'mail.message.reaction';
}

export class MailMessageScheduleModel extends BaseOdooModel<TMailMessageSchedule> {
    protected readonly model = 'mail.message.schedule';
}

export class MailMessageSubtypeModel extends BaseOdooModel<TMailMessageSubtype> {
    protected readonly model = 'mail.message.subtype';
}

export class MailMessageTranslationModel extends BaseOdooModel<TMailMessageTranslation> {
    protected readonly model = 'mail.message.translation';
}

export class MailMessageModel extends BaseOdooModel<TMailMessage> {
    protected readonly model = 'mail.message';
}

export class MailNotificationModel extends BaseOdooModel<TMailNotification> {
    protected readonly model = 'mail.notification';
}

export class MailPushDeviceModel extends BaseOdooModel<TMailPushDevice> {
    protected readonly model = 'mail.push.device';
}

export class MailPushModel extends BaseOdooModel<TMailPush> {
    protected readonly model = 'mail.push';
}

export class MailRenderMixinModel extends BaseOdooModel<TMailRenderMixin> {
    protected readonly model = 'mail.render.mixin';
}

export class MailResendMessageModel extends BaseOdooModel<TMailResendMessage> {
    protected readonly model = 'mail.resend.message';
}

export class MailResendPartnerModel extends BaseOdooModel<TMailResendPartner> {
    protected readonly model = 'mail.resend.partner';
}

export class MailScheduledMessageModel extends BaseOdooModel<TMailScheduledMessage> {
    protected readonly model = 'mail.scheduled.message';
}

export class MailTemplatePreviewModel extends BaseOdooModel<TMailTemplatePreview> {
    protected readonly model = 'mail.template.preview';
}

export class MailTemplateResetModel extends BaseOdooModel<TMailTemplateReset> {
    protected readonly model = 'mail.template.reset';
}

export class MailTemplateModel extends BaseOdooModel<TMailTemplate> {
    protected readonly model = 'mail.template';
}

export class MailThreadBlacklistModel extends BaseOdooModel<TMailThreadBlacklist> {
    protected readonly model = 'mail.thread.blacklist';
}

export class MailThreadCcModel extends BaseOdooModel<TMailThreadCc> {
    protected readonly model = 'mail.thread.cc';
}

export class MailThreadMainAttachmentModel extends BaseOdooModel<TMailThreadMainAttachment> {
    protected readonly model = 'mail.thread.main.attachment';
}

export class MailThreadPhoneModel extends BaseOdooModel<TMailThreadPhone> {
    protected readonly model = 'mail.thread.phone';
}

export class MailThreadModel extends BaseOdooModel<TMailThread> {
    protected readonly model = 'mail.thread';
}

export class MailTrackingDurationMixinModel extends BaseOdooModel<TMailTrackingDurationMixin> {
    protected readonly model = 'mail.tracking.duration.mixin';
}

export class MailTrackingValueModel extends BaseOdooModel<TMailTrackingValue> {
    protected readonly model = 'mail.tracking.value';
}

export class MailWizardInviteModel extends BaseOdooModel<TMailWizardInvite> {
    protected readonly model = 'mail.wizard.invite';
}

export class MrpAccountWipAccountingLineModel extends BaseOdooModel<TMrpAccountWipAccountingLine> {
    protected readonly model = 'mrp.account.wip.accounting.line';
}

export class MrpAccountWipAccountingModel extends BaseOdooModel<TMrpAccountWipAccounting> {
    protected readonly model = 'mrp.account.wip.accounting';
}

export class MrpBatchProduceModel extends BaseOdooModel<TMrpBatchProduce> {
    protected readonly model = 'mrp.batch.produce';
}

export class MrpBomByproductModel extends BaseOdooModel<TMrpBomByproduct> {
    protected readonly model = 'mrp.bom.byproduct';
}

export class MrpBomLineModel extends BaseOdooModel<TMrpBomLine> {
    protected readonly model = 'mrp.bom.line';
}

export class MrpBomModel extends BaseOdooModel<TMrpBom> {
    protected readonly model = 'mrp.bom';
}

export class MrpConsumptionWarningLineModel extends BaseOdooModel<TMrpConsumptionWarningLine> {
    protected readonly model = 'mrp.consumption.warning.line';
}

export class MrpConsumptionWarningModel extends BaseOdooModel<TMrpConsumptionWarning> {
    protected readonly model = 'mrp.consumption.warning';
}

export class MrpProductionBackorderLineModel extends BaseOdooModel<TMrpProductionBackorderLine> {
    protected readonly model = 'mrp.production.backorder.line';
}

export class MrpProductionBackorderModel extends BaseOdooModel<TMrpProductionBackorder> {
    protected readonly model = 'mrp.production.backorder';
}

export class MrpProductionSplitLineModel extends BaseOdooModel<TMrpProductionSplitLine> {
    protected readonly model = 'mrp.production.split.line';
}

export class MrpProductionSplitMultiModel extends BaseOdooModel<TMrpProductionSplitMulti> {
    protected readonly model = 'mrp.production.split.multi';
}

export class MrpProductionSplitModel extends BaseOdooModel<TMrpProductionSplit> {
    protected readonly model = 'mrp.production.split';
}

export class MrpProductionModel extends BaseOdooModel<TMrpProduction> {
    protected readonly model = 'mrp.production';
}

export class MrpReportModel extends BaseOdooModel<TMrpReport> {
    protected readonly model = 'mrp.report';
}

export class MrpRoutingWorkcenterModel extends BaseOdooModel<TMrpRoutingWorkcenter> {
    protected readonly model = 'mrp.routing.workcenter';
}

export class MrpUnbuildModel extends BaseOdooModel<TMrpUnbuild> {
    protected readonly model = 'mrp.unbuild';
}

export class MrpWorkcenterCapacityModel extends BaseOdooModel<TMrpWorkcenterCapacity> {
    protected readonly model = 'mrp.workcenter.capacity';
}

export class MrpWorkcenterProductivityLossModel extends BaseOdooModel<TMrpWorkcenterProductivityLoss> {
    protected readonly model = 'mrp.workcenter.productivity.loss';
}

export class MrpWorkcenterProductivityLossTypeModel extends BaseOdooModel<TMrpWorkcenterProductivityLossType> {
    protected readonly model = 'mrp.workcenter.productivity.loss.type';
}

export class MrpWorkcenterProductivityModel extends BaseOdooModel<TMrpWorkcenterProductivity> {
    protected readonly model = 'mrp.workcenter.productivity';
}

export class MrpWorkcenterTagModel extends BaseOdooModel<TMrpWorkcenterTag> {
    protected readonly model = 'mrp.workcenter.tag';
}

export class MrpWorkcenterModel extends BaseOdooModel<TMrpWorkcenter> {
    protected readonly model = 'mrp.workcenter';
}

export class MrpWorkorderModel extends BaseOdooModel<TMrpWorkorder> {
    protected readonly model = 'mrp.workorder';
}

export class Mrp_productionAdditionalWorkorderModel extends BaseOdooModel<TMrp_productionAdditionalWorkorder> {
    protected readonly model = 'mrp_production.additional.workorder';
}

export class OnboardingOnboardingStepModel extends BaseOdooModel<TOnboardingOnboardingStep> {
    protected readonly model = 'onboarding.onboarding.step';
}

export class OnboardingOnboardingModel extends BaseOdooModel<TOnboardingOnboarding> {
    protected readonly model = 'onboarding.onboarding';
}

export class OnboardingProgressStepModel extends BaseOdooModel<TOnboardingProgressStep> {
    protected readonly model = 'onboarding.progress.step';
}

export class OnboardingProgressModel extends BaseOdooModel<TOnboardingProgress> {
    protected readonly model = 'onboarding.progress';
}

export class PaymentCaptureWizardModel extends BaseOdooModel<TPaymentCaptureWizard> {
    protected readonly model = 'payment.capture.wizard';
}

export class PaymentLinkWizardModel extends BaseOdooModel<TPaymentLinkWizard> {
    protected readonly model = 'payment.link.wizard';
}

export class PaymentMethodModel extends BaseOdooModel<TPaymentMethod> {
    protected readonly model = 'payment.method';
}

export class PaymentProviderOnboardingWizardModel extends BaseOdooModel<TPaymentProviderOnboardingWizard> {
    protected readonly model = 'payment.provider.onboarding.wizard';
}

export class PaymentProviderModel extends BaseOdooModel<TPaymentProvider> {
    protected readonly model = 'payment.provider';
}

export class PaymentRefundWizardModel extends BaseOdooModel<TPaymentRefundWizard> {
    protected readonly model = 'payment.refund.wizard';
}

export class PaymentTokenModel extends BaseOdooModel<TPaymentToken> {
    protected readonly model = 'payment.token';
}

export class PaymentTransactionModel extends BaseOdooModel<TPaymentTransaction> {
    protected readonly model = 'payment.transaction';
}

export class PhoneBlacklistRemoveModel extends BaseOdooModel<TPhoneBlacklistRemove> {
    protected readonly model = 'phone.blacklist.remove';
}

export class PhoneBlacklistModel extends BaseOdooModel<TPhoneBlacklist> {
    protected readonly model = 'phone.blacklist';
}

export class PickingLabelTypeModel extends BaseOdooModel<TPickingLabelType> {
    protected readonly model = 'picking.label.type';
}

export class PortalMixinModel extends BaseOdooModel<TPortalMixin> {
    protected readonly model = 'portal.mixin';
}

export class PortalShareModel extends BaseOdooModel<TPortalShare> {
    protected readonly model = 'portal.share';
}

export class PortalWizardModel extends BaseOdooModel<TPortalWizard> {
    protected readonly model = 'portal.wizard';
}

export class PortalWizardUserModel extends BaseOdooModel<TPortalWizardUser> {
    protected readonly model = 'portal.wizard.user';
}

export class PrintPrenumberedChecksModel extends BaseOdooModel<TPrintPrenumberedChecks> {
    protected readonly model = 'print.prenumbered.checks';
}

export class PrivacyLogModel extends BaseOdooModel<TPrivacyLog> {
    protected readonly model = 'privacy.log';
}

export class PrivacyLookupWizardLineModel extends BaseOdooModel<TPrivacyLookupWizardLine> {
    protected readonly model = 'privacy.lookup.wizard.line';
}

export class PrivacyLookupWizardModel extends BaseOdooModel<TPrivacyLookupWizard> {
    protected readonly model = 'privacy.lookup.wizard';
}

export class ProcurementGroupModel extends BaseOdooModel<TProcurementGroup> {
    protected readonly model = 'procurement.group';
}

export class ProductAttributeCustomValueModel extends BaseOdooModel<TProductAttributeCustomValue> {
    protected readonly model = 'product.attribute.custom.value';
}

export class ProductAttributeModel extends BaseOdooModel<TProductAttribute> {
    protected readonly model = 'product.attribute';
}

export class ProductAttributeValueModel extends BaseOdooModel<TProductAttributeValue> {
    protected readonly model = 'product.attribute.value';
}

export class ProductAvataxCategoryModel extends BaseOdooModel<TProductAvataxCategory> {
    protected readonly model = 'product.avatax.category';
}

export class ProductCatalogMixinModel extends BaseOdooModel<TProductCatalogMixin> {
    protected readonly model = 'product.catalog.mixin';
}

export class ProductCategoryModel extends BaseOdooModel<TProductCategory> {
    protected readonly model = 'product.category';
}

export class ProductComboItemModel extends BaseOdooModel<TProductComboItem> {
    protected readonly model = 'product.combo.item';
}

export class ProductComboModel extends BaseOdooModel<TProductCombo> {
    protected readonly model = 'product.combo';
}

export class ProductDocumentModel extends BaseOdooModel<TProductDocument> {
    protected readonly model = 'product.document';
}

export class ProductLabelLayoutModel extends BaseOdooModel<TProductLabelLayout> {
    protected readonly model = 'product.label.layout';
}

export class ProductPackagingModel extends BaseOdooModel<TProductPackaging> {
    protected readonly model = 'product.packaging';
}

export class ProductPricelistItemModel extends BaseOdooModel<TProductPricelistItem> {
    protected readonly model = 'product.pricelist.item';
}

export class ProductPricelistModel extends BaseOdooModel<TProductPricelist> {
    protected readonly model = 'product.pricelist';
}

export class ProductProductModel extends BaseOdooModel<TProductProduct> {
    protected readonly model = 'product.product';
}

export class ProductRemovalModel extends BaseOdooModel<TProductRemoval> {
    protected readonly model = 'product.removal';
}

export class ProductReplenishModel extends BaseOdooModel<TProductReplenish> {
    protected readonly model = 'product.replenish';
}

export class ProductSupplierinfoModel extends BaseOdooModel<TProductSupplierinfo> {
    protected readonly model = 'product.supplierinfo';
}

export class ProductTagModel extends BaseOdooModel<TProductTag> {
    protected readonly model = 'product.tag';
}

export class ProductTemplateAttributeExclusionModel extends BaseOdooModel<TProductTemplateAttributeExclusion> {
    protected readonly model = 'product.template.attribute.exclusion';
}

export class ProductTemplateAttributeLineModel extends BaseOdooModel<TProductTemplateAttributeLine> {
    protected readonly model = 'product.template.attribute.line';
}

export class ProductTemplateAttributeValueModel extends BaseOdooModel<TProductTemplateAttributeValue> {
    protected readonly model = 'product.template.attribute.value';
}

export class ProductTemplateModel extends BaseOdooModel<TProductTemplate> {
    protected readonly model = 'product.template';
}

export class ProposeChangeModel extends BaseOdooModel<TProposeChange> {
    protected readonly model = 'propose.change';
}

export class Publisher_warrantyContractModel extends BaseOdooModel<TPublisher_warrantyContract> {
    protected readonly model = 'publisher_warranty.contract';
}

export class PurchaseBillLineMatchModel extends BaseOdooModel<TPurchaseBillLineMatch> {
    protected readonly model = 'purchase.bill.line.match';
}

export class PurchaseBillUnionModel extends BaseOdooModel<TPurchaseBillUnion> {
    protected readonly model = 'purchase.bill.union';
}

export class PurchaseEdiXmlUbl_bis3Model extends BaseOdooModel<TPurchaseEdiXmlUbl_bis3> {
    protected readonly model = 'purchase.edi.xml.ubl_bis3';
}

export class PurchaseOrderLineModel extends BaseOdooModel<TPurchaseOrderLine> {
    protected readonly model = 'purchase.order.line';
}

export class PurchaseOrderModel extends BaseOdooModel<TPurchaseOrder> {
    protected readonly model = 'purchase.order';
}

export class PurchaseReportModel extends BaseOdooModel<TPurchaseReport> {
    protected readonly model = 'purchase.report';
}

export class QualityAlertStageModel extends BaseOdooModel<TQualityAlertStage> {
    protected readonly model = 'quality.alert.stage';
}

export class QualityAlertTeamModel extends BaseOdooModel<TQualityAlertTeam> {
    protected readonly model = 'quality.alert.team';
}

export class QualityAlertModel extends BaseOdooModel<TQualityAlert> {
    protected readonly model = 'quality.alert';
}

export class QualityCheckModel extends BaseOdooModel<TQualityCheck> {
    protected readonly model = 'quality.check';
}

export class QualityPointTest_typeModel extends BaseOdooModel<TQualityPointTest_type> {
    protected readonly model = 'quality.point.test_type';
}

export class QualityPointModel extends BaseOdooModel<TQualityPoint> {
    protected readonly model = 'quality.point';
}

export class QualityReasonModel extends BaseOdooModel<TQualityReason> {
    protected readonly model = 'quality.reason';
}

export class QualityTagModel extends BaseOdooModel<TQualityTag> {
    protected readonly model = 'quality.tag';
}

export class QuotationDocumentModel extends BaseOdooModel<TQuotationDocument> {
    protected readonly model = 'quotation.document';
}

export class ReportAccountReport_hash_integrityModel extends BaseOdooModel<TReportAccountReport_hash_integrity> {
    protected readonly model = 'report.account.report_hash_integrity';
}

export class ReportAccountReport_invoiceModel extends BaseOdooModel<TReportAccountReport_invoice> {
    protected readonly model = 'report.account.report_invoice';
}

export class ReportAccountReport_invoice_with_paymentsModel extends BaseOdooModel<TReportAccountReport_invoice_with_payments> {
    protected readonly model = 'report.account.report_invoice_with_payments';
}

export class ReportAccount_batch_paymentPrint_batch_paymentModel extends BaseOdooModel<TReportAccount_batch_paymentPrint_batch_payment> {
    protected readonly model = 'report.account_batch_payment.print_batch_payment';
}

export class ReportBaseReport_irmodulereferenceModel extends BaseOdooModel<TReportBaseReport_irmodulereference> {
    protected readonly model = 'report.base.report_irmodulereference';
}

export class ReportHr_skillsReport_employee_cvModel extends BaseOdooModel<TReportHr_skillsReport_employee_cv> {
    protected readonly model = 'report.hr_skills.report_employee_cv';
}

export class ReportLayoutModel extends BaseOdooModel<TReportLayout> {
    protected readonly model = 'report.layout';
}

export class ReportMrpReport_bom_structureModel extends BaseOdooModel<TReportMrpReport_bom_structure> {
    protected readonly model = 'report.mrp.report_bom_structure';
}

export class ReportMrpReport_mo_overviewModel extends BaseOdooModel<TReportMrpReport_mo_overview> {
    protected readonly model = 'report.mrp.report_mo_overview';
}

export class ReportMrp_account_enterpriseMrp_cost_structureModel extends BaseOdooModel<TReportMrp_account_enterpriseMrp_cost_structure> {
    protected readonly model = 'report.mrp_account_enterprise.mrp_cost_structure';
}

export class ReportMrp_account_enterpriseProduct_template_cost_structureModel extends BaseOdooModel<TReportMrp_account_enterpriseProduct_template_cost_structure> {
    protected readonly model = 'report.mrp_account_enterprise.product_template_cost_structure';
}

export class ReportPaperformatModel extends BaseOdooModel<TReportPaperformat> {
    protected readonly model = 'report.paperformat';
}

export class ReportProductReport_pricelistModel extends BaseOdooModel<TReportProductReport_pricelist> {
    protected readonly model = 'report.product.report_pricelist';
}

export class ReportProductReport_producttemplatelabel2x7Model extends BaseOdooModel<TReportProductReport_producttemplatelabel2x7> {
    protected readonly model = 'report.product.report_producttemplatelabel2x7';
}

export class ReportProductReport_producttemplatelabel4x12Model extends BaseOdooModel<TReportProductReport_producttemplatelabel4x12> {
    protected readonly model = 'report.product.report_producttemplatelabel4x12';
}

export class ReportProductReport_producttemplatelabel4x12nopriceModel extends BaseOdooModel<TReportProductReport_producttemplatelabel4x12noprice> {
    protected readonly model = 'report.product.report_producttemplatelabel4x12noprice';
}

export class ReportProductReport_producttemplatelabel4x7Model extends BaseOdooModel<TReportProductReport_producttemplatelabel4x7> {
    protected readonly model = 'report.product.report_producttemplatelabel4x7';
}

export class ReportProductReport_producttemplatelabel_dymoModel extends BaseOdooModel<TReportProductReport_producttemplatelabel_dymo> {
    protected readonly model = 'report.product.report_producttemplatelabel_dymo';
}

export class ReportStockLabel_lot_template_viewModel extends BaseOdooModel<TReportStockLabel_lot_template_view> {
    protected readonly model = 'report.stock.label_lot_template_view';
}

export class ReportStockLabel_product_product_viewModel extends BaseOdooModel<TReportStockLabel_product_product_view> {
    protected readonly model = 'report.stock.label_product_product_view';
}

export class ReportStockQuantityModel extends BaseOdooModel<TReportStockQuantity> {
    protected readonly model = 'report.stock.quantity';
}

export class ReportStockReport_receptionModel extends BaseOdooModel<TReportStockReport_reception> {
    protected readonly model = 'report.stock.report_reception';
}

export class ReportStockReport_stock_ruleModel extends BaseOdooModel<TReportStockReport_stock_rule> {
    protected readonly model = 'report.stock.report_stock_rule';
}

export class ResBankModel extends BaseOdooModel<TResBank> {
    protected readonly model = 'res.bank';
}

export class ResCompanyModel extends BaseOdooModel<TResCompany> {
    protected readonly model = 'res.company';
}

export class ResConfigSettingsModel extends BaseOdooModel<TResConfigSettings> {
    protected readonly model = 'res.config.settings';
}

export class ResConfigModel extends BaseOdooModel<TResConfig> {
    protected readonly model = 'res.config';
}

export class ResCountryGroupModel extends BaseOdooModel<TResCountryGroup> {
    protected readonly model = 'res.country.group';
}

export class ResCountryStateModel extends BaseOdooModel<TResCountryState> {
    protected readonly model = 'res.country.state';
}

export class ResCountryModel extends BaseOdooModel<TResCountry> {
    protected readonly model = 'res.country';
}

export class ResCurrencyRateModel extends BaseOdooModel<TResCurrencyRate> {
    protected readonly model = 'res.currency.rate';
}

export class ResCurrencyModel extends BaseOdooModel<TResCurrency> {
    protected readonly model = 'res.currency';
}

export class ResDeviceLogModel extends BaseOdooModel<TResDeviceLog> {
    protected readonly model = 'res.device.log';
}

export class ResDeviceModel extends BaseOdooModel<TResDevice> {
    protected readonly model = 'res.device';
}

export class ResGroupsModel extends BaseOdooModel<TResGroups> {
    protected readonly model = 'res.groups';
}

export class ResLangModel extends BaseOdooModel<TResLang> {
    protected readonly model = 'res.lang';
}

export class ResPartnerAutocompleteSyncModel extends BaseOdooModel<TResPartnerAutocompleteSync> {
    protected readonly model = 'res.partner.autocomplete.sync';
}

export class ResPartnerBankModel extends BaseOdooModel<TResPartnerBank> {
    protected readonly model = 'res.partner.bank';
}

export class ResPartnerCategoryModel extends BaseOdooModel<TResPartnerCategory> {
    protected readonly model = 'res.partner.category';
}

export class ResPartnerIndustryModel extends BaseOdooModel<TResPartnerIndustry> {
    protected readonly model = 'res.partner.industry';
}

export class ResPartnerTitleModel extends BaseOdooModel<TResPartnerTitle> {
    protected readonly model = 'res.partner.title';
}

export class ResPartnerModel extends BaseOdooModel<TResPartner> {
    protected readonly model = 'res.partner';
}

export class ResUsersApikeysDescriptionModel extends BaseOdooModel<TResUsersApikeysDescription> {
    protected readonly model = 'res.users.apikeys.description';
}

export class ResUsersApikeysShowModel extends BaseOdooModel<TResUsersApikeysShow> {
    protected readonly model = 'res.users.apikeys.show';
}

export class ResUsersApikeysModel extends BaseOdooModel<TResUsersApikeys> {
    protected readonly model = 'res.users.apikeys';
}

export class ResUsersDeletionModel extends BaseOdooModel<TResUsersDeletion> {
    protected readonly model = 'res.users.deletion';
}

export class ResUsersIdentitycheckModel extends BaseOdooModel<TResUsersIdentitycheck> {
    protected readonly model = 'res.users.identitycheck';
}

export class ResUsersLogModel extends BaseOdooModel<TResUsersLog> {
    protected readonly model = 'res.users.log';
}

export class ResUsersSettingsModel extends BaseOdooModel<TResUsersSettings> {
    protected readonly model = 'res.users.settings';
}

export class ResUsersSettingsVolumesModel extends BaseOdooModel<TResUsersSettingsVolumes> {
    protected readonly model = 'res.users.settings.volumes';
}

export class ResUsersModel extends BaseOdooModel<TResUsers> {
    protected readonly model = 'res.users';
}

export class ResetViewArchWizardModel extends BaseOdooModel<TResetViewArchWizard> {
    protected readonly model = 'reset.view.arch.wizard';
}

export class ResourceCalendarAttendanceModel extends BaseOdooModel<TResourceCalendarAttendance> {
    protected readonly model = 'resource.calendar.attendance';
}

export class ResourceCalendarLeavesModel extends BaseOdooModel<TResourceCalendarLeaves> {
    protected readonly model = 'resource.calendar.leaves';
}

export class ResourceCalendarModel extends BaseOdooModel<TResourceCalendar> {
    protected readonly model = 'resource.calendar';
}

export class ResourceMixinModel extends BaseOdooModel<TResourceMixin> {
    protected readonly model = 'resource.mixin';
}

export class ResourceResourceModel extends BaseOdooModel<TResourceResource> {
    protected readonly model = 'resource.resource';
}

export class SaleAdvancePaymentInvModel extends BaseOdooModel<TSaleAdvancePaymentInv> {
    protected readonly model = 'sale.advance.payment.inv';
}

export class SaleEdiCommonModel extends BaseOdooModel<TSaleEdiCommon> {
    protected readonly model = 'sale.edi.common';
}

export class SaleEdiXmlUbl_bis3Model extends BaseOdooModel<TSaleEdiXmlUbl_bis3> {
    protected readonly model = 'sale.edi.xml.ubl_bis3';
}

export class SaleMassCancelOrdersModel extends BaseOdooModel<TSaleMassCancelOrders> {
    protected readonly model = 'sale.mass.cancel.orders';
}

export class SaleOrderCancelModel extends BaseOdooModel<TSaleOrderCancel> {
    protected readonly model = 'sale.order.cancel';
}

export class SaleOrderDiscountModel extends BaseOdooModel<TSaleOrderDiscount> {
    protected readonly model = 'sale.order.discount';
}

export class SaleOrderLineModel extends BaseOdooModel<TSaleOrderLine> {
    protected readonly model = 'sale.order.line';
}

export class SaleOrderOptionModel extends BaseOdooModel<TSaleOrderOption> {
    protected readonly model = 'sale.order.option';
}

export class SaleOrderSpreadsheetModel extends BaseOdooModel<TSaleOrderSpreadsheet> {
    protected readonly model = 'sale.order.spreadsheet';
}

export class SaleOrderTemplateLineModel extends BaseOdooModel<TSaleOrderTemplateLine> {
    protected readonly model = 'sale.order.template.line';
}

export class SaleOrderTemplateOptionModel extends BaseOdooModel<TSaleOrderTemplateOption> {
    protected readonly model = 'sale.order.template.option';
}

export class SaleOrderTemplateModel extends BaseOdooModel<TSaleOrderTemplate> {
    protected readonly model = 'sale.order.template';
}

export class SaleOrderModel extends BaseOdooModel<TSaleOrder> {
    protected readonly model = 'sale.order';
}

export class SalePaymentProviderOnboardingWizardModel extends BaseOdooModel<TSalePaymentProviderOnboardingWizard> {
    protected readonly model = 'sale.payment.provider.onboarding.wizard';
}

export class SalePdfFormFieldModel extends BaseOdooModel<TSalePdfFormField> {
    protected readonly model = 'sale.pdf.form.field';
}

export class SaleReportModel extends BaseOdooModel<TSaleReport> {
    protected readonly model = 'sale.report';
}

export class SequenceMixinModel extends BaseOdooModel<TSequenceMixin> {
    protected readonly model = 'sequence.mixin';
}

export class ShippingInformationUpdaterMixinModel extends BaseOdooModel<TShippingInformationUpdaterMixin> {
    protected readonly model = 'shipping.information.updater.mixin';
}

export class SmsAccountCodeModel extends BaseOdooModel<TSmsAccountCode> {
    protected readonly model = 'sms.account.code';
}

export class SmsAccountPhoneModel extends BaseOdooModel<TSmsAccountPhone> {
    protected readonly model = 'sms.account.phone';
}

export class SmsAccountSenderModel extends BaseOdooModel<TSmsAccountSender> {
    protected readonly model = 'sms.account.sender';
}

export class SmsComposerModel extends BaseOdooModel<TSmsComposer> {
    protected readonly model = 'sms.composer';
}

export class SmsResendRecipientModel extends BaseOdooModel<TSmsResendRecipient> {
    protected readonly model = 'sms.resend.recipient';
}

export class SmsResendModel extends BaseOdooModel<TSmsResend> {
    protected readonly model = 'sms.resend';
}

export class SmsSmsModel extends BaseOdooModel<TSmsSms> {
    protected readonly model = 'sms.sms';
}

export class SmsTemplatePreviewModel extends BaseOdooModel<TSmsTemplatePreview> {
    protected readonly model = 'sms.template.preview';
}

export class SmsTemplateResetModel extends BaseOdooModel<TSmsTemplateReset> {
    protected readonly model = 'sms.template.reset';
}

export class SmsTemplateModel extends BaseOdooModel<TSmsTemplate> {
    protected readonly model = 'sms.template';
}

export class SmsTrackerModel extends BaseOdooModel<TSmsTracker> {
    protected readonly model = 'sms.tracker';
}

export class SnailmailLetterFormatErrorModel extends BaseOdooModel<TSnailmailLetterFormatError> {
    protected readonly model = 'snailmail.letter.format.error';
}

export class SnailmailLetterMissingRequiredFieldsModel extends BaseOdooModel<TSnailmailLetterMissingRequiredFields> {
    protected readonly model = 'snailmail.letter.missing.required.fields';
}

export class SnailmailLetterModel extends BaseOdooModel<TSnailmailLetter> {
    protected readonly model = 'snailmail.letter';
}

export class SpreadsheetCellThreadModel extends BaseOdooModel<TSpreadsheetCellThread> {
    protected readonly model = 'spreadsheet.cell.thread';
}

export class SpreadsheetDashboardGroupModel extends BaseOdooModel<TSpreadsheetDashboardGroup> {
    protected readonly model = 'spreadsheet.dashboard.group';
}

export class SpreadsheetDashboardShareModel extends BaseOdooModel<TSpreadsheetDashboardShare> {
    protected readonly model = 'spreadsheet.dashboard.share';
}

export class SpreadsheetDashboardModel extends BaseOdooModel<TSpreadsheetDashboard> {
    protected readonly model = 'spreadsheet.dashboard';
}

export class SpreadsheetMixinModel extends BaseOdooModel<TSpreadsheetMixin> {
    protected readonly model = 'spreadsheet.mixin';
}

export class SpreadsheetRevisionModel extends BaseOdooModel<TSpreadsheetRevision> {
    protected readonly model = 'spreadsheet.revision';
}

export class StockBackorderConfirmationLineModel extends BaseOdooModel<TStockBackorderConfirmationLine> {
    protected readonly model = 'stock.backorder.confirmation.line';
}

export class StockBackorderConfirmationModel extends BaseOdooModel<TStockBackorderConfirmation> {
    protected readonly model = 'stock.backorder.confirmation';
}

export class StockChangeProductQtyModel extends BaseOdooModel<TStockChangeProductQty> {
    protected readonly model = 'stock.change.product.qty';
}

export class StockDeliveryNoteBaseWizardModel extends BaseOdooModel<TStockDeliveryNoteBaseWizard> {
    protected readonly model = 'stock.delivery.note.base.wizard';
}

export class StockDeliveryNoteConfirmWizardModel extends BaseOdooModel<TStockDeliveryNoteConfirmWizard> {
    protected readonly model = 'stock.delivery.note.confirm.wizard';
}

export class StockDeliveryNoteCreateWizardModel extends BaseOdooModel<TStockDeliveryNoteCreateWizard> {
    protected readonly model = 'stock.delivery.note.create.wizard';
}

export class StockDeliveryNoteInvoiceWizardModel extends BaseOdooModel<TStockDeliveryNoteInvoiceWizard> {
    protected readonly model = 'stock.delivery.note.invoice.wizard';
}

export class StockDeliveryNoteLineModel extends BaseOdooModel<TStockDeliveryNoteLine> {
    protected readonly model = 'stock.delivery.note.line';
}

export class StockDeliveryNoteSelectWizardModel extends BaseOdooModel<TStockDeliveryNoteSelectWizard> {
    protected readonly model = 'stock.delivery.note.select.wizard';
}

export class StockDeliveryNoteModel extends BaseOdooModel<TStockDeliveryNote> {
    protected readonly model = 'stock.delivery.note';
}

export class StockDeliveryNoteTypeModel extends BaseOdooModel<TStockDeliveryNoteType> {
    protected readonly model = 'stock.delivery.note.type';
}

export class StockForecasted_product_productModel extends BaseOdooModel<TStockForecasted_product_product> {
    protected readonly model = 'stock.forecasted_product_product';
}

export class StockForecasted_product_templateModel extends BaseOdooModel<TStockForecasted_product_template> {
    protected readonly model = 'stock.forecasted_product_template';
}

export class StockInventoryAdjustmentNameModel extends BaseOdooModel<TStockInventoryAdjustmentName> {
    protected readonly model = 'stock.inventory.adjustment.name';
}

export class StockInventoryConflictModel extends BaseOdooModel<TStockInventoryConflict> {
    protected readonly model = 'stock.inventory.conflict';
}

export class StockInventoryWarningModel extends BaseOdooModel<TStockInventoryWarning> {
    protected readonly model = 'stock.inventory.warning';
}

export class StockLocationModel extends BaseOdooModel<TStockLocation> {
    protected readonly model = 'stock.location';
}

export class StockLotReportModel extends BaseOdooModel<TStockLotReport> {
    protected readonly model = 'stock.lot.report';
}

export class StockLotModel extends BaseOdooModel<TStockLot> {
    protected readonly model = 'stock.lot';
}

export class StockMoveLineModel extends BaseOdooModel<TStockMoveLine> {
    protected readonly model = 'stock.move.line';
}

export class StockMoveModel extends BaseOdooModel<TStockMove> {
    protected readonly model = 'stock.move';
}

export class StockOrderpointSnoozeModel extends BaseOdooModel<TStockOrderpointSnooze> {
    protected readonly model = 'stock.orderpoint.snooze';
}

export class StockPackageDestinationModel extends BaseOdooModel<TStockPackageDestination> {
    protected readonly model = 'stock.package.destination';
}

export class StockPackageTypeModel extends BaseOdooModel<TStockPackageType> {
    protected readonly model = 'stock.package.type';
}

export class StockPackage_levelModel extends BaseOdooModel<TStockPackage_level> {
    protected readonly model = 'stock.package_level';
}

export class StockPickingCheckerMixinModel extends BaseOdooModel<TStockPickingCheckerMixin> {
    protected readonly model = 'stock.picking.checker.mixin';
}

export class StockPickingGoodsAppearanceModel extends BaseOdooModel<TStockPickingGoodsAppearance> {
    protected readonly model = 'stock.picking.goods.appearance';
}

export class StockPickingTransportConditionModel extends BaseOdooModel<TStockPickingTransportCondition> {
    protected readonly model = 'stock.picking.transport.condition';
}

export class StockPickingTransportMethodModel extends BaseOdooModel<TStockPickingTransportMethod> {
    protected readonly model = 'stock.picking.transport.method';
}

export class StockPickingTransportReasonModel extends BaseOdooModel<TStockPickingTransportReason> {
    protected readonly model = 'stock.picking.transport.reason';
}

export class StockPickingModel extends BaseOdooModel<TStockPicking> {
    protected readonly model = 'stock.picking';
}

export class StockPickingTypeModel extends BaseOdooModel<TStockPickingType> {
    protected readonly model = 'stock.picking.type';
}

export class StockPutawayRuleModel extends BaseOdooModel<TStockPutawayRule> {
    protected readonly model = 'stock.putaway.rule';
}

export class StockQuantPackageModel extends BaseOdooModel<TStockQuantPackage> {
    protected readonly model = 'stock.quant.package';
}

export class StockQuantRelocateModel extends BaseOdooModel<TStockQuantRelocate> {
    protected readonly model = 'stock.quant.relocate';
}

export class StockQuantModel extends BaseOdooModel<TStockQuant> {
    protected readonly model = 'stock.quant';
}

export class StockQuantityHistoryModel extends BaseOdooModel<TStockQuantityHistory> {
    protected readonly model = 'stock.quantity.history';
}

export class StockReplenishMixinModel extends BaseOdooModel<TStockReplenishMixin> {
    protected readonly model = 'stock.replenish.mixin';
}

export class StockReplenishmentInfoModel extends BaseOdooModel<TStockReplenishmentInfo> {
    protected readonly model = 'stock.replenishment.info';
}

export class StockReplenishmentOptionModel extends BaseOdooModel<TStockReplenishmentOption> {
    protected readonly model = 'stock.replenishment.option';
}

export class StockReportModel extends BaseOdooModel<TStockReport> {
    protected readonly model = 'stock.report';
}

export class StockRequestCountModel extends BaseOdooModel<TStockRequestCount> {
    protected readonly model = 'stock.request.count';
}

export class StockReturnPickingLineModel extends BaseOdooModel<TStockReturnPickingLine> {
    protected readonly model = 'stock.return.picking.line';
}

export class StockReturnPickingModel extends BaseOdooModel<TStockReturnPicking> {
    protected readonly model = 'stock.return.picking';
}

export class StockRouteModel extends BaseOdooModel<TStockRoute> {
    protected readonly model = 'stock.route';
}

export class StockRuleModel extends BaseOdooModel<TStockRule> {
    protected readonly model = 'stock.rule';
}

export class StockRulesReportModel extends BaseOdooModel<TStockRulesReport> {
    protected readonly model = 'stock.rules.report';
}

export class StockScrapReasonTagModel extends BaseOdooModel<TStockScrapReasonTag> {
    protected readonly model = 'stock.scrap.reason.tag';
}

export class StockScrapModel extends BaseOdooModel<TStockScrap> {
    protected readonly model = 'stock.scrap';
}

export class StockStorageCategoryCapacityModel extends BaseOdooModel<TStockStorageCategoryCapacity> {
    protected readonly model = 'stock.storage.category.capacity';
}

export class StockStorageCategoryModel extends BaseOdooModel<TStockStorageCategory> {
    protected readonly model = 'stock.storage.category';
}

export class StockTraceabilityReportModel extends BaseOdooModel<TStockTraceabilityReport> {
    protected readonly model = 'stock.traceability.report';
}

export class StockTrackConfirmationModel extends BaseOdooModel<TStockTrackConfirmation> {
    protected readonly model = 'stock.track.confirmation';
}

export class StockTrackLineModel extends BaseOdooModel<TStockTrackLine> {
    protected readonly model = 'stock.track.line';
}

export class StockValuationLayerRevaluationModel extends BaseOdooModel<TStockValuationLayerRevaluation> {
    protected readonly model = 'stock.valuation.layer.revaluation';
}

export class StockValuationLayerModel extends BaseOdooModel<TStockValuationLayer> {
    protected readonly model = 'stock.valuation.layer';
}

export class StockWarehouseOrderpointModel extends BaseOdooModel<TStockWarehouseOrderpoint> {
    protected readonly model = 'stock.warehouse.orderpoint';
}

export class StockWarehouseModel extends BaseOdooModel<TStockWarehouse> {
    protected readonly model = 'stock.warehouse';
}

export class StockWarnInsufficientQtyScrapModel extends BaseOdooModel<TStockWarnInsufficientQtyScrap> {
    protected readonly model = 'stock.warn.insufficient.qty.scrap';
}

export class StockWarnInsufficientQtyModel extends BaseOdooModel<TStockWarnInsufficientQty> {
    protected readonly model = 'stock.warn.insufficient.qty';
}

export class StockWarnInsufficientQtyUnbuildModel extends BaseOdooModel<TStockWarnInsufficientQtyUnbuild> {
    protected readonly model = 'stock.warn.insufficient.qty.unbuild';
}

export class Stock_barcodeCancelOperationModel extends BaseOdooModel<TStock_barcodeCancelOperation> {
    protected readonly model = 'stock_barcode.cancel.operation';
}

export class StudioApprovalEntryModel extends BaseOdooModel<TStudioApprovalEntry> {
    protected readonly model = 'studio.approval.entry';
}

export class StudioApprovalRequestModel extends BaseOdooModel<TStudioApprovalRequest> {
    protected readonly model = 'studio.approval.request';
}

export class StudioApprovalRuleApproverModel extends BaseOdooModel<TStudioApprovalRuleApprover> {
    protected readonly model = 'studio.approval.rule.approver';
}

export class StudioApprovalRuleDelegateModel extends BaseOdooModel<TStudioApprovalRuleDelegate> {
    protected readonly model = 'studio.approval.rule.delegate';
}

export class StudioApprovalRuleModel extends BaseOdooModel<TStudioApprovalRule> {
    protected readonly model = 'studio.approval.rule';
}

export class StudioExportModelModel extends BaseOdooModel<TStudioExportModel> {
    protected readonly model = 'studio.export.model';
}

export class StudioExportWizardDataModel extends BaseOdooModel<TStudioExportWizardData> {
    protected readonly model = 'studio.export.wizard.data';
}

export class StudioExportWizardModel extends BaseOdooModel<TStudioExportWizard> {
    protected readonly model = 'studio.export.wizard';
}

export class StudioMixinModel extends BaseOdooModel<TStudioMixin> {
    protected readonly model = 'studio.mixin';
}

export class TemplateResetMixinModel extends BaseOdooModel<TTemplateResetMixin> {
    protected readonly model = 'template.reset.mixin';
}

export class UomCategoryModel extends BaseOdooModel<TUomCategory> {
    protected readonly model = 'uom.category';
}

export class UomUomModel extends BaseOdooModel<TUomUom> {
    protected readonly model = 'uom.uom';
}

export class UpdateProductAttributeValueModel extends BaseOdooModel<TUpdateProductAttributeValue> {
    protected readonly model = 'update.product.attribute.value';
}

export class UtmCampaignModel extends BaseOdooModel<TUtmCampaign> {
    protected readonly model = 'utm.campaign';
}

export class UtmMediumModel extends BaseOdooModel<TUtmMedium> {
    protected readonly model = 'utm.medium';
}

export class UtmMixinModel extends BaseOdooModel<TUtmMixin> {
    protected readonly model = 'utm.mixin';
}

export class UtmSourceMixinModel extends BaseOdooModel<TUtmSourceMixin> {
    protected readonly model = 'utm.source.mixin';
}

export class UtmSourceModel extends BaseOdooModel<TUtmSource> {
    protected readonly model = 'utm.source';
}

export class UtmStageModel extends BaseOdooModel<TUtmStage> {
    protected readonly model = 'utm.stage';
}

export class UtmTagModel extends BaseOdooModel<TUtmTag> {
    protected readonly model = 'utm.tag';
}

export class ValidateAccountMoveModel extends BaseOdooModel<TValidateAccountMove> {
    protected readonly model = 'validate.account.move';
}

export class VendorDelayReportModel extends BaseOdooModel<TVendorDelayReport> {
    protected readonly model = 'vendor.delay.report';
}

export class Web_editorAssetsModel extends BaseOdooModel<TWeb_editorAssets> {
    protected readonly model = 'web_editor.assets';
}

export class Web_editorConverterTestSubModel extends BaseOdooModel<TWeb_editorConverterTestSub> {
    protected readonly model = 'web_editor.converter.test.sub';
}

export class Web_editorConverterTestModel extends BaseOdooModel<TWeb_editorConverterTest> {
    protected readonly model = 'web_editor.converter.test';
}

export class Web_tourTourStepModel extends BaseOdooModel<TWeb_tourTourStep> {
    protected readonly model = 'web_tour.tour.step';
}

export class Web_tourTourModel extends BaseOdooModel<TWeb_tourTour> {
    protected readonly model = 'web_tour.tour';
}

export class WizardIrModelMenuCreateModel extends BaseOdooModel<TWizardIrModelMenuCreate> {
    protected readonly model = 'wizard.ir.model.menu.create';
}
