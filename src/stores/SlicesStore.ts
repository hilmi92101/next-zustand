// package
import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

// ts
import { Store } from '@/types/store';

// slices
import { createUserSlice } from './slices/user-slice';
import { createCartSlice } from './slices/cart-slice';

// basic version
// export const useStore = create<Store>()(immer((...a) => ({
//     ...createUserSlice(...a),
//     ...createCartSlice(...a),
// })));

// if installed redux browser extension, can use devtools middleware
// export const useStore = create<Store>()(
//     devtools(
//         immer((...a) => ({
//             ...createUserSlice(...a),
//             ...createCartSlice(...a),
//         }))
//     )
// );

// add subscribe & persist middleware
export const useStore = create<Store>()(
    devtools(
        persist(
            subscribeWithSelector(
                immer((...a) => ({
                    ...createUserSlice(...a),
                    ...createCartSlice(...a),
                }))
            ),
			{
				name: 'local-storage', // name anything you want
			}
        )
    )
);


