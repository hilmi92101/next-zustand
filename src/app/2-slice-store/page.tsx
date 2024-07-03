'use client'

import { useStore } from "@/stores/SlicesStore"


const SliceStorePage = () => {

    const store = useStore();

    console.log(JSON.stringify(store))

    return (
        <>
            <h1>{store.address}</h1>
            <h1>{store.age}</h1>
        </>
    )
}

export default SliceStorePage