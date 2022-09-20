import React, { useEffect, useState } from 'react';
import styles from '@styles/Quotes.module.scss'

const quotes = ["\"Innovation distinguishes between a leader and a follower\", Steve Jobs.", "\"You have to trust in something - your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life\", Steve Jobs", "\"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work\", Steve Jobs", "\"I want to talk about three ways to create a world where everyone has a sense of purpose: by taking on big meaningful projects together, by redefining equality so everyone has the freedom to pursue purpose, and by building community across the world\", Mark Zuckerberg","\"How about modernizing democracy so everyone can vote online, and personalizing education so everyone can learn?\", Mark Zuckerberg","\"We are all in this life to make a long-term wish or project come true, anything else is a mere distraction\", Mark Zuckerberg", "\"Work hard, have fun, make history\", Jeff Bezos","\"Life is too short to hang out with people who aren't resourceful\", Jeff Bezos","\"Cleverness is a gift, kindness is a choice\", Jeff Bezos","\"Be nice to nerds. You may end up working for them. We all could\" Bill Gates"]

export default function Quotes() {
    const [numb, setNumb] = useState(0);
    useEffect(()=>{
        setNumb(Math.floor(Math.random() * 10), [])
    })
        
    return(
        <>
            <p className={styles.quotes}>
                <span>
                    {quotes[numb]}
                </span>
            </p>
        </>
    )
};
