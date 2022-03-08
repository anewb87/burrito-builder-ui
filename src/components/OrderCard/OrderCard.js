import React from 'react'
import './OrderCard.css'

const OrderCard = ({ name, ingredients }) => {

    let keyNum = 0

    return (
        <div data-testid='cards' className='card'>
            <h3>{name}</h3>
            <ul className='ingredient-list'>
                {ingredients.map(ingredient => {
                    keyNum++
                    return <li key={keyNum}>{ingredient}</li>
                })}
            </ul>
        </div>
    )
}

export default OrderCard