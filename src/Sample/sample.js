import React, {useState} from "react";

function Sample() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [inputValue, setInputValue] = useState("pedro");
    const [counts ,setCounts] = useState(0);
    const [showText, setShowText] = useState(false)


    let onChange = (e) =>{
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div>
                <p>You clicked {count2} times</p>
                <button onClick={() => setCount2(count2 + 2)}>
                    Click me
                </button>
            </div>
            <div>
                <input placeholder="enter something...." onChange={onChange}/>
                {inputValue}
            </div>
            <div>
                <h1>{counts}</h1>
                <button onClick={() => {
                    setCounts(counts - 1);
                    setShowText(!showText);
                }
                }>Click me
                </button>
                {showText && <p>This is a text</p>}
            </div>
        </div>
    );
}
export default Sample;
