import React from 'react'
import "./Order.css"
import moment from 'moment'
import Checkoutproduct from './Checkoutproduct'
import CurrencyFormat from 'react-currency-format'
function Order({ Order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(Order.data.created).format('MMM Do YYYY,h:mma')}</p>
            <p className='order_id'>
                <small>{Order.id}</small>
            </p>
            {Order.data.basket?.map((item) =>
                <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    image={item.price}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            )}
            <CurrencyFormat
            renderText={(value) =>(
                <h3 className='order_total'>order total:{value}</h3>
            )}
            decimalScale={2}
            value={Order.data.amount/100}
            displayType='text'
            thousandSeparator={true}
            prefix={'$'}
            />
        </div>
    )
}

export default Order
