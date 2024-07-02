import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <div>
                    <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} width={250} height={200} /></a>
                    <h4>{title}</h4>
                    <h5>{description}</h5>
                    <h3>{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Course