import { BaseModel } from '../BaseModel';
import { RoomOffice } from '../types/room.office';

export class RoomOfficeModel extends BaseModel<RoomOffice> {
  protected readonly model = 'room.office';
}
