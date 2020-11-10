import React from 'react'
const curology = "https://res.cloudinary.com/jguaura/image/upload/c_scale,w_600/v1605049210/Agency/curology-min_pbwokv.webp"
const lumin = "https://res.cloudinary.com/jguaura/image/upload/c_scale,w_600/v1605049220/Agency/lumin-min_nxa4ub.webp"
const workspace = "https://res.cloudinary.com/jguaura/image/upload/c_scale,w_600/v1605049225/Agency/yourspace-min_ifzkuq.webp"

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
