import { BaseModel } from '../BaseModel';
import { KpiProvider } from '../types/kpi.provider';

export class KpiProviderModel extends BaseModel<KpiProvider> {
  protected readonly model = 'kpi.provider';
}
