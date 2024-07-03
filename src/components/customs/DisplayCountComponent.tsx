import basicStore from "@/stores/basicStore";

const DisplayCountComponent = () => {

    const store = basicStore();

    return (
        <>
            {store.count}
        </>
    )
}

export default DisplayCountComponent