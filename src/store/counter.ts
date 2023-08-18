import { create } from "zustand";

interface CounterStore {
  num: number;
  increase: () => void;
}

const useCounterStore = create<CounterStore>()((set) => ({
  num: 0,
  increase: () =>
    set((state) => {
      const result = { num: (state.num += 1) };
      return result;
    }),
}));

export default useCounterStore;
