import { BaseModel } from '../BaseModel';
import { DataMergeRecord } from '../types/data_merge.record';

export class DataMergeRecordModel extends BaseModel<DataMergeRecord> {
  protected readonly model = 'data_merge.record';
}
