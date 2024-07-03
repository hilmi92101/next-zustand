// package
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

// ts
import { Store } from '@/types/store';

// slices
import { createUserSlice } from './slices/user-slice';
import { createCartSlice } from './slices/cart-slice';

export const useStore = create<Store>()(immer((...a) => ({
    ...createUserSlice(...a),
    ...createCartSlice(...a),
})));
