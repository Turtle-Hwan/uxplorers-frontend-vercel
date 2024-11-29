import { SeatVariant } from '../Seat/types';

export interface seat {
  id: number | undefined;
  status: SeatVariant;
}

export interface selectSeatPropType {
  seats: seat[];
  onSelectSeat: (seatNum: number) => void;
}
