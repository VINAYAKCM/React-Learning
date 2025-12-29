{/* Changes button from Yes to No */}

import React from 'react'

export default function State1() {

    const [result, setResult] = React.useState("Yes")

    function handleClick(){
        setResult("No")
    }

  return (
    <div className="state1">
        <button onClick={handleClick}>{result}</button>
    </div>
  )
}