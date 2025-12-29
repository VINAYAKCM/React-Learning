{/* Changes button from Yes to No */}

import React from "react";

export default function App() {

    const content = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]
  
    const [newArray, storeArray] = React.useState([])


    const addingItem = newArray.map(thing => <p key={thing}>{thing}</p>)

    function Additem() {

      // WHAT THIS DOES: So, "storeArray" is a function and we are defining what to do to it. Inside it, there's something called preNewArray and what I want for it 
      // to happen is to take the first element of content array(content[preNewArray.length]) and put it into preNewArray
      storeArray(
        preNewArray => [
          ...preNewArray,
          content[preNewArray.length]
        ]

      )
    }


    return (
      <main>
          <button onClick={Additem}>Add</button>
          <section aria-live="polite">
            {addingItem}
          </section>
      </main>
    )
  }