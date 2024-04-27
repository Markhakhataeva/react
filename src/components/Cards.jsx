import React from "react";

export const Card=({textButton,title,img,index})=>{
    
    return(
        <div className="occasion-card-item"key={index}>
            <div className="card-img">
                <img src={img} alt=""/>
            </div>
            <div className="card-desc">
                <div className="card-name">
                    {title}
                </div>
            
                <div className="see_more">
                    <a href="#">
                        {textButton}
                    </a>
                </div>
            </div>
        </div>
    )
}