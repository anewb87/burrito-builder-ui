import React from 'react'
import './OrderCard.css'

const OrderCard = ({ name, ingredients }) => {

    return (
        <div data-testid='cards' className='card'>
            <h3>{name}</h3>
            <ul className='ingredient-list'>
                {ingredients.map(ingredient => {
                    return <li>{ingredient}</li>
                })}
            </ul>
            {/* <button>🗑</button> */}
        </div>
    )
}

export default OrderCard