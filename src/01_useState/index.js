import { useState } from "react";
function Counter () {
    /*** We can not put hooks inside IF Statements, FUNCTIONS, LOOPS and can not be nested any things */
    // if(true) {
    //     useState()
    // }
    /** useState return array with 2 values, first value is current state and second value is function for update state */
    //const arry = useSate(4)
    // function counterInitial () {
    //     console.log('Run function');
    //     return 4;
    // }
    // const [count, setCount] = useState(counterInitial);
    // const [state, setState] = useState({count:4, theme: 'blue'});
    const [count, setCount] = useState(4);
    const [theme, setTheme] = useState('blue');
    // const count = state.count;
    // const theme = state.theme;
    function decrementCount () {
        // setState(prevState => {
            // this is overriding all our state
            // return {count: prevState.count -1}
            /* Here we need to use spread operator so it will not override
               complete object 
            */
            //return {...prevState, count:prevState.count - 1}

        // })
        setCount(preCount => preCount - 1); 
        setTheme('red');
        // setCount(preCount => preCount - 1);
    }
    function incrementCount() {
        //setState(prevState => {
            // this is overriding all our state
            // return {count: prevState.count +1}
            /* Here we need to use spread operator so it will not override
               complete object 
            */
            // return {...prevState, count: prevState.count +1}
        //})
        setCount(preCount => preCount + 1);
    }
    return(
        <div style={{margin:20}}>
            <button onClick={decrementCount}> - </button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}> + </button>
        </div>
    );
}
export default Counter