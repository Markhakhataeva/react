import React from "react";
import { Button } from "./Button";


export const Gift=({title,titleTag,textTag,text,img})=>{
    const Tag=titleTag||"h1"||"h2"||"h3"
    const TextTags=textTag||"p"
    const image=img||"img"
    const classname={contentButtonClass:"contentButtonClass"}
    return(
        <div className="blocks_wrapper">
            <div className="left_block_txt">
                <Tag>
                    {title}
                </Tag>
                <TextTags>
                    {text}
                </TextTags>
                <Button text="Find gift now" classname={classname.contentButtonClass}/>
            </div>
            <div className="right_block_img">
                <img src={image} alt=""/>
            </div>
        </div>
    )


}