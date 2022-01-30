import React from "react";
export default  function Button(props){
    return (
        <button onClick={props.onClick} className={` border-0  b-20 py-3 pointer ${props.classes}`}>
            {props.text}
        </button>
    )
}