import React from 'react';
import OrderCard from '../OrderCard/OrderCard';
import './Orders.css';

const Orders = ({ orders }) => {
  // console.log(orders)
  // const orderEls = orders.map(order => {
  //   return (
  //     <div className="order">
  //       <h3>{order.name}</h3>
  //       <ul className="ingredient-list">
  //         {order.ingredients.map(ingredient => {
  //           return <li>{ingredient}</li>
  //         })}
  //       </ul>
  //     </div>
  //   )
  // });

  return (
    <section className='order'>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      {/* { orderEls.length ? orderEls : <p>No orders yet!</p> } */}
    </section>
  )
}

export default Orders;