import { create } from 'zustand';
import type { BackwardBusListState } from './index.types';

const initialState = {
  backwardBusList: [],
};

const useBackwardBusListStore = create<BackwardBusListState>((set) => ({
  ...initialState,
  concat: (newBackwardBusList) =>
    set((state) => ({
      ...state,
      backwardBusList: [...state.backwardBusList, ...newBackwardBusList],
    })),
  deleteByStartId: (targetStartId) =>
    set((state) => ({
      ...state,
      backwardBusList: state.backwardBusList.filter(
        (backwardBus) => backwardBus.startId !== targetStartId
      ),
    })),
  reset: () => set({ ...initialState }),
}));

export default useBackwardBusListStore;
