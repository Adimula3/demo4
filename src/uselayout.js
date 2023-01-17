import React, {useLayoutEffect, useEffect, useRef} from "react";
import useref from "./Sample/useref";
function UseLayout() {

    const inputRef = useRef(null);
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);
    useEffect(() => {
        inputRef.current.value = "hello"
    }, []);
    return (
     <div>
         <input ref={inputRef} value="Pedro" style={{width: 400, height: 100}}/>
     </div>
    );
}

export default UseLayout;
