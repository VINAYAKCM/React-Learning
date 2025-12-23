import React from "react";

export default function App() {
    
/**
 * How React remembers and updates state (simple summary):
 * 
 * 1. useState(true) creates a "memory slot" that React manages.
 *    - isGoingOut = current value from that slot
 *    - setIsGoingOut = think of it as a memoryslot that stores "isGoingOut"'s value that can be changed
 * 
 * 2. When you call setIsGoingOut(prev => !prev):
 *    - React looks at its memory slot → gets the CURRENT value
 *    - Passes that current value to your function as "prev"
 *    - Your function returns the new value (!prev flips it)
 *    - React updates the memory slot with the new value
 * 
 * 3. React then RE-RUNS the whole App component
 *    - useState now returns the UPDATED value from the slot
 *    - UI updates (button text changes)
 * 
 * 4. {isGoingOut ? "Yes" : "No"} ---this line? poof! just outputs the text yes/no based on the current value of isGoingOut
 * 
 * React always knows the current state because IT stores it.
 * You just read it (isGoingOut) and update it (setIsGoingOut).
 */

    const [isGoingOut, setIsGoingOut] = React.useState(true);

    function handleClick(){
        setIsGoingOut(prevState => !prevState);
    }
    
    return (
        <main className="state3">
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={handleClick}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
