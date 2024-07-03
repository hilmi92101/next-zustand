import { create } from 'zustand';

const basicStore = create<{
    count: number;
    inc: () => void;
    dec: () => void;
}>((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1})),
    dec: () => set((state) => ({ count: state.count - 1})),

}));

export default basicStore; 