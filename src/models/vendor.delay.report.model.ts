import { BaseModel } from '../BaseModel';
import { VendorDelayReport } from '../types/vendor.delay.report';

export class VendorDelayReportModel extends BaseModel<VendorDelayReport> {
  protected readonly model = 'vendor.delay.report';
}
