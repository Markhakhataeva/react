import React from "react";

export const Button=({text,classname})=>{
    return(
        <button className={classname}>
            {text}
        </button>
    )
}