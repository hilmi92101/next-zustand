import { StateCreator } from "zustand";

// ts
type UserState = {
    userName: string;
    fullName: string;
    age: number;
    address: string;
};
type UserActions = {
    setAddress: (address: string) => void;
    fetchUser: () => Promise<void>;
};
export type UserSlice = UserState & UserActions;

// slice
export const createUserSlice: StateCreator<
    UserSlice,
    [["zustand/immer", never]],
    [],
    UserSlice
> = (set) => ({
    
    userName: "rowan",
    fullName: "Rowan Flintstone",
    age: 44,
    address: "14 Moonstone Lane, Whisperwind Hollow, Elvenwood Forest",

    setAddress: (address) =>
        set((state) => {
            state.address = address;
        }
    ),
    fetchUser: async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		set({
			address: 'Test Address',
			fullName: 'Joh Doe',
			userName: 'JohDoe@test.com',
			age: 32,
		});
	},
});
