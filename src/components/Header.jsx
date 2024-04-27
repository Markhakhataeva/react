import React from "react";
import{Logo} from "./Logo";
import {Button} from "./Button";



export const Header=(props)=>{
    const text=['Home','About Us','Services','Blogs'];
    const classname={
        headerClass:"Header_button"
    }
    return(
        <div className="Header">
            <Logo/>
            <ul className="Menu">
                {
                    text.map((txt)=>(
                        <li>
                            {txt}
                        </li>
                    ))
                }
            </ul>
            <Button text='Gift Finder'classname={classname.headerClass}/>
        </div>

    );
}