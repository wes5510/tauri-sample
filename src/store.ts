import { create } from "zustand";

type StoreState = {
	focusItemId?: string;
};

type StoreAction = {
	setFocusItemId: (id: string) => void;
	isFocused: (id: string) => boolean;
};

export const useStore = create<StoreState & StoreAction>((set, get) => ({
	focusItemId: undefined,
	setFocusItemId: (id) => set(() => ({ focusItemId: id })),
	isFocused: (id) => id === get().focusItemId,
}));
