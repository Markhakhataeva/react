import React from "react";
import { Button } from "./Button";


export const ReverseGift=({title,titleTag,textTag,text,img})=>{
    const Tag=titleTag||"h1"||"h2"||"h3"
    const TextTags=textTag||"p"
    const image=img||"img"
    const classname={contentButtonClass_2:"contentButtonClass_2"
    }
    return(
        <div className="blocks_wrapper">
             <div className="right_block_img">
                <img src={image} alt=""/>
            </div>
            <div className="left_block_txt2">
                <Tag>
                    {title}
                </Tag>
                <TextTags>
                    {text}
                </TextTags>
                <Button text="Learn More" classname={classname.contentButtonClass_2}/>
            </div>
           
        </div>
    )}