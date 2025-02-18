import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import './Orders.css';

const Orders = ({ orders }) => {
    const orderEls = orders.map(order => {
      return (
        <OrderCard
          key={order.id}
          id={order.id}
          name={order.name}
          ingredients={order.ingredients}
        />
      )
    })

  return (
    <div className='order'>
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </div>
  )
}

export default Orders;
