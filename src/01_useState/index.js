import { useState } from "react";
function Counter () {
    /*** We can not put hooks inside IF Statements, FUNCTIONS, LOOPS and can not be nested any things */
    // if(true) {
    //     useState()
    // }
    /** useState return array with 2 values, first value is current state and second value is function for update state */
    //const arry = useSate(4)
    function counterInitial () {
        console.log('Run function');
        return 4;
    }
    const [count, setCount] = useState(counterInitial);
    function decrementCount () {
        setCount(preCount => preCount - 1); 
        setCount(preCount => preCount - 1);
    }
    function incrementCount() {
        setCount(preCount => preCount + 1);
    }
    return(
        <div style={{margin:20}}>
            <button onClick={decrementCount}> - </button>
            <span>{count}</span>
            <button onClick={incrementCount}> + </button>
        </div>
    );
}
export default Counter