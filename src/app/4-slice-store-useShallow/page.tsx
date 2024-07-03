'use client'

// package
import { useShallow } from "zustand/react/shallow";

// store
import { useStore } from "@/stores/SlicesStore"


const SliceStoreUseShallowPage = () => {

    const { age, fullName, total } = useStore(

        useShallow((state) => ({
            age: state.age,
            fullName: state.fullName,
            total: state.total,
        }))
    );

    // also can like this
    const address = useStore((state) => state.address);

    return (
        <>
            
            <h1>{age}</h1>
            <h1>{fullName}</h1>
            
            <h1>{total}</h1>

            <h1>{address}</h1>
            
        </>
    )
}

export default SliceStoreUseShallowPage