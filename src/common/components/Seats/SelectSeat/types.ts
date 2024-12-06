import { SeatVariant } from '../Seat/types';

export interface seat {
  id: number | undefined;
  status: SeatVariant;
  type?: SeatTypeVariant;
}

export interface selectSeatPropType {
  seats: seat[];
  onSelectSeat: (seatNum: number, type: SeatTypeVariant) => void;
}

export type SeatTypeVariant = 'children' | 'teens' | 'adults';
