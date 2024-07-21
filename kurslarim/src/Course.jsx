import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <div>
                    <img src={image} width={250} height={200} />
                    <h4>{title}</h4>
                    <h5>{description}</h5>
                    <h3>{price}</h3>
                    <a href={link}>Satın Almak İçin</a>
                </div>
            </div>
        </div>
    )
}

export default Course