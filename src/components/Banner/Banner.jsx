import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Arrow } from '../../assets/arrow-right.svg'

const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Creating unique brands is</span>
                        </div>
                        <div className="line">
                            <span>what we do.</span>
                        </div>
                    </h2>
                    <div className="btn-row">
                        <Link to="/about">More about us <Arrow /> </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
