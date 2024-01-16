import { create } from 'zustand';

export type SearchStore = {
  filterPopoverState: boolean;
  setFilterPopoverState: (value: boolean) => void;
};

const initialFilterPopoverState: boolean = false;

const useSearchStore = create<SearchStore>((set, get) => ({
  filterPopoverState: initialFilterPopoverState,
  setFilterPopoverState: (value: boolean) => set(() => ({ filterPopoverState: value }))
}));

export default useSearchStore;
