'use client'

import { Button } from "@/components/ui/button";

import basicStore from "@/stores/basicStore";
import DisplayCountComponent from "@/components/customs/DisplayCountComponent"

const BasicStoredPage = () => {

    const store = basicStore();

    return (
        <>
            <div className="py-8">
                <h1 className="text-5xl">Zustand: Basic</h1>
            </div>

            <div className="py-4">
                <Button onClick={store.inc}>+</Button>

                <DisplayCountComponent />
                
                <Button onClick={store.dec}>-</Button>
            </div>

        </>
    )
}

export default BasicStoredPage