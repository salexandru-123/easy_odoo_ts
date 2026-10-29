import { BaseModel } from '../BaseModel';
import { DataCleaningRule } from '../types/data_cleaning.rule';

export class DataCleaningRuleModel extends BaseModel<DataCleaningRule> {
  protected readonly model = 'data_cleaning.rule';
}
