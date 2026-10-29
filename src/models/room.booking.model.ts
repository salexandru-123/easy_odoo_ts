import { BaseModel } from '../BaseModel';
import { RoomBooking } from '../types/room.booking';

export class RoomBookingModel extends BaseModel<RoomBooking> {
  protected readonly model = 'room.booking';
}
