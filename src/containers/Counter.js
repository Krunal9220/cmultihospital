import React, { useEffect, useState } from 'react';
import Button, { ButtonType } from '../components/common/button/Button';

function Counter(props) {
    const [counter, setCounter] = useState(0);
    const [disable, setDisable] = useState(false);

    useEffect(
        () => {
            if (counter === 0) {
                setDisable(true);
            } else {
                setDisable(false);
            }
        }
    )

    const handleIncrement = () => {
        setCounter(counter+1);
    }

    const handleDecrement = () => {
        if (counter !== 0) {
            setCounter(counter-1);
        }
    }

    return (
        <div className='container text-center counter'>
            <h1>{counter}</h1>

            <div>
                <Button disabled={disable} onClick={() => handleDecrement()}  buttonType={ButtonType.PRIMARY}>Decrement</Button>
                <Button onClick={() => handleIncrement()}  buttonType={ButtonType.PRIMARY}>Increment</Button>
            </div>
        </div>
    );
}

export default Counter;