import React from 'react';
import {Gift} from "./Gift"
import Background from "../assets/Background.png" 
import {ReverseGift} from "./ReverseGift"
import Media from "../assets/Media.png"
import { Card } from './Cards';
import CardImage1 from "../assets/card1.png"
import CardImage2 from "../assets/card2.png"
import CardImage3 from "../assets/card3.png"
import CardImage4 from "../assets/card4.png"


export const Content=(props)=>{
    const  title=['Birthday','Anniversary','Valentines Day','Christmas']
    const image=[CardImage1,CardImage2,CardImage3,CardImage4]
    return(
        <div className='Content'>
            <div className='wrapper'>
                <Gift
                    title="Find a gift for
                     your wife or girlfriend"
                    titleTag={"h2"}
                    textTag={"p"}
                    text="Struggling to find a gift for your wife or girlfriend?
                    No problem!"
                    img={Background}
                />
                <ReverseGift
                    title="How we work"
                    titleTag="h2"
                    textTag="p"
                    text="We’ve actually already asked hundreds of women what they want,
                    and made a database with the results. All you have to do is take
                    our short survey that only takes seconds, and our proprietary
                    algorithm will match you with a few perfect gift options."
                    img={Media}
                />
            </div>
            <section className='Gifts_Occasions'>
                <h2>Gifts for all Occasions</h2>
                <span>“Try our web app to find the best gifts for all occasions”</span>
                <div className='card_body'>
                    {
                        title.map((titl,index)=>(
                            <Card title={titl} index={index} textButton="See more >" img={image[index]}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

