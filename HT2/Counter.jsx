import { useState } from "react";
import { memo } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter +1);
    }

    const handleClickDecr = () => {
        setCounter(counter -1);
    }

    return <div>
        <h1>Counter {counter}</h1>
        <button onClick={handleClick}>increment</button>
        <button onClick={handleClickDecr}>decrement</button>
        
    </div>;
} 


const Counter = (props) => {
    const [counter1, setCounter] = useState(0);
    const handleClickPlus1 = () => {
        setCounter(counter1 +1);
    }

    const [counter2, setCounter2] = useState(0);
    const handleClickPlus2 = () => {
        setCounter2(counter2 +2);
    }

    const [counter3, setCounter3] = useState(0);
    const handleClickPlus3 = () => {
        setCounter3(counter3 +3);
    }

    let sum=0;
    sum = counter1 + counter2 + counter3;

    return <div>
             <button onClick={handleClickPlus1}>increment+1</button>
             <button onClick={handleClickPlus2}>increment+2</button>
             <button onClick={handleClickPlus3}>increment+3</button>
             <span>Sum: {sum}</span>
        </div>
}


const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (<>
        <button onClick={handleClick}>increment + 1</button>
        {counter}
        <br></br>
        app counter {props.appCounter}
    </>
    );
}

export default memo(Counter, (prevProps, nextProps) => {
    return nextProps.appCounter % 5;
}); 


//Task 2
const Counter = ({ counter, setCounter }) => {

    const handleClick = () => {
        setCounter(counter + 1);
    };
    
    return (<>
        <button onClick={handleClick}>increment + 1</button>
        {counter}
        <br></br>
        {/* {{props.appCounter} */}
    </>);
};

export default memo(Counter, (prevProps, nextProps) => {
    return nextProps.appCounter % 5;
});