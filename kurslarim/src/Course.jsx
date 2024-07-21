import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <img src={image} width={250} height={200} />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <a className='course-link' href={link}>Satın Almak İçin Tıklayınız.</a>
        </div>
    )
}

export default Course