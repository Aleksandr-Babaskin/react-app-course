import { useState } from "react";
import { Button } from "./assets/components/Button/Button";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const setCountHandler = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <Button onClick={setCountHandler}>
            count is {count}
        </Button>
    );
}
