import React, {forwardRef, useImperativeHandle, useState} from "react";

 const Button = forwardRef((props,ref) => {
   const [toggle, setToggle] = useState(false)

     useImperativeHandle(ref, () => ({
         alterToggle() {
             setToggle(!toggle);
         },

     }));
      return (
         <div>
             <button>
                 Button from child
             </button>
             {toggle && <span>toggle</span>}
         </div>
     );
 });


export default Button;
