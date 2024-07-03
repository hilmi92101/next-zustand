'use client'

import { useStore } from "@/stores/SlicesStore"


const SliceStoreDestructurePage = () => {

    // destructuring state
    const { age, fullName } = useStore((state) => ({
        age: state.age,
        fullName: state.fullName,
    }));

    return (
        <>
            
            <h1>{age}</h1>
            <h1>{fullName}</h1>
        </>
    )
}

export default SliceStoreDestructurePage