{/* Visual Counter component where you can increment and decrement a count */}

import React from "react";
import Count from "../components/Count.jsx"

export default function State2() {

    const [count, setCount] = React.useState(0);

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     * 
     * Normal Value Method
     *  function add() {
        setCount(count + 1)}
     * 
     * For example: Prev Value Method
     *  function add() {
        setCount(prevCount=> prevCount + 1)
    }*/

    function handleMinus(){
        setCount(prevCount => prevCount - 1);
    }


    function handlePlus(){
        setCount(prevCount => prevCount + 1);
    }   

    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */

    return (
      <main className="container">
        <div className="counter">
            <button className="minus" aria-label="decrease-count" onClick={handleMinus}>-</button>
            
            <Count number = {Count}/>

            <button className="plus" aria-label="increase-count" onClick={handlePlus}>+</button>
        </div>
      </main>
    )
}