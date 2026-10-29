import { BaseModel } from '../BaseModel';
import { DataMergeRule } from '../types/data_merge.rule';

export class DataMergeRuleModel extends BaseModel<DataMergeRule> {
  protected readonly model = 'data_merge.rule';
}
