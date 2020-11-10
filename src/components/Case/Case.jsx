import React from 'react'
import curology from '../../assets/curology-min.png'
import lumin from '../../assets/lumin-min.png'
import workspace from '../../assets/yourspace-min.png'

const Case = ({ item }) => {
    const { id, subtitle, title, img } = item
    return (
        <div className="case" key={id}>
            <div className="case-details">
                <span>{subtitle}</span>
                <h2>{title}</h2>
            </div>
            <div className="case-image">
                <img src={
                    img === 'curology-min' 
                        ? curology 
                        : img === 'lumin-min' 
                            ? lumin 
                            : workspace
                        } alt={title}/>
            </div>
        </div>
    )
}

export default Case
