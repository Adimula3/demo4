import React, {useRef} from "react";

function RefTutorial() {
    const inputRef = useRef(null)

    const onClick = () => {
        inputRef.current.value = "";
    };
    return (
      <div>
          <h1>Pedro</h1>
          <input type="text" placeholder="something" ref={inputRef}/>
          <button onClick={onClick}>Change</button>
      </div>
    );
}
export default RefTutorial;
