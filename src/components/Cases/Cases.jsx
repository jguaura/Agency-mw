import React from 'react'
import { ReactComponent as PrevArrow } from '../../assets/arrow-left.svg'
import { ReactComponent as NextArrow } from '../../assets/arrow-right.svg'
import Case from '../Case/Case'

const caseStudies = [
    {
        id: 1, 
        subtitle: 'Curology', 
        title: 'A custom formula for your skin unique needs',
        img: 'curology-min'
    },
    {
        id: 2,
        subtitle: 'Yourspace',
        title: 'Open space floor plans for your next venture',
        img: 'yourspace-min'
    },
    {
        id: 3,
        subtitle: 'Lumin',
        title: 'For your best look ever',
        img: 'lumin-min'
    }

]


const Cases = () => {
    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">
                    <div className="cases-arrow prev disabled">
                        <PrevArrow />
                    </div>
                    <div className="cases-arrow next">
                        <NextArrow />
                    </div>
                </div>
                <div className="row">
                    {
                        caseStudies.map(item => <Case item={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Cases
