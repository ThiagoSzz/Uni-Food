import { create } from 'zustand';

export type TestStore = {
  testNumber: number;
  testSetNumber: (value: number) => void;
};

const initialNumber: number = 0;

const useTestStore = create<TestStore>((set, get) => ({
  testNumber: initialNumber,
  testSetNumber: (value: number) => set(() => ({ testNumber: value })),
}));

export default useTestStore;
