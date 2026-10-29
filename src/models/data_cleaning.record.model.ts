import { BaseModel } from '../BaseModel';
import { DataCleaningRecord } from '../types/data_cleaning.record';

export class DataCleaningRecordModel extends BaseModel<DataCleaningRecord> {
  protected readonly model = 'data_cleaning.record';
}
