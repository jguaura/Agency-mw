import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner';
import Cases from '../components/Cases/Cases';
import IntroOverlay from '../components/IntroOverlay/IntroOverlay'
import { overlayAnim } from './../animations/animations';

const Home = () => {
    const [animationComplete, setAnimationComplete] = useState(false)

    const completeAnimation = () => {
        setAnimationComplete(prev => !prev)
    }

    useEffect(() => {
        // main animation
        overlayAnim(completeAnimation)
    }, [])

    return (
        <div>
            {
                !animationComplete
                    ?   <IntroOverlay />
                    :   ""
            }
            <Banner />
            <Cases />    
        </div>
    )
}

export default Home
