import React, {useEffect, useState} from "react";
import axios from "axios";

function Sample2 () {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
            setData(response.data[3].email);
            console.log("api was called");
        });
        }, []);
      return (
          <div>
              Hello world {data}
          </div>
      );
}
export default Sample2;
