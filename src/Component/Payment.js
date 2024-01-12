import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Component/Checkoutproduct";
import "./Payment.css";
// import { loadStripe } from "@stripe/stripe-js";
import {
    CardElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();

    const getBasketTotal = (basket) =>
        basket.reduce((amount, item) => item.price + amount, 0);

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);

    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    console.log("THE SECRET IS >>>", clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent=Payment comfirmation;

                db.collection("users")
                    .doc(user?.uid)
                    .collection("orders")
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: "EMPTY_BASKET",
                });

                navigate("../Orders");
            });
    };

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

  

 



return (
    <div className="payment">
        <div className="payment__container">
            <h1>
                Checkout(
                <Link to="/Checkout">
                    {basket?.length} {basket?.length > 1 ? "items" : "item"}
                </Link>
                )
            </h1>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>

                <div className="payment__address">
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>

                    <div className="payment__items">
                        {basket?.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                description={item.description}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />

                        <CurrencyFormat
                            renderText={(value) => <h3>Order Total: {value}</h3>}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        <div>
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}

export default Payment;



// import React, { useEffect, useState } from 'react'
// import "./Payment.css"
// import { useStateValue } from '../StateProvider'
// import { Link } from 'react-router-dom';
// import Checkoutproduct from './Checkoutproduct';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import CurrencyFormat from 'react-currency-format';
// import { useNavigate } from 'react-router-dom';
// import axios from '../axios';
// import { db } from '../firebase';
// function Payment() {
//     const [{ basket, user }, dispatch] = useStateValue();
//     const navigate = useNavigate();
//     const getBasketTotal = (basket) => {
//         // basket?.reduce((amount,item)=>item.price +amount);
//         if (!basket || !basket.length) {
//             return 0;
//         }
//         return basket.reduce((amount, item) => {
//             if (item && item.price) {
//                 return amount + item.price;
//             }
//             return amount;
//         }, 0)
//     }
//     const stripe = useStripe();
//     const element = useElements();
//     const [error, setError] = useState(null);
//     const [disabled, setDisabled] = useState(true);
//     const [succeeded, setSucceeded] = useState(false);
//     const [processing, setProcessing] = useState('');
//     const [clientSecret,setClientSecret] = useState('');
//     // useEffect(()=>{    
//     //        const getClientSecret = async () => {
//     //            try {
//     //            const response = await axios({
//     //                method: "post",
//     //                url:`/payments/create?totlal=${getBasketTotal(basket) * 100}`,
//     //            });
//     //            setClientSecret(response.data.clientSecret);
//     //            } catch (error) {
//     //                console.log(`error found:${error}`)
//     //            }

//     //        getClientSecret();
        
//     //    }
//     // },[basket]);

//     useEffect(() => {
//         const getClientSecret = async () => {
//             try {
//                 const response = await axios.post('/create-payment-intent', {
//                     items: basket, // Assuming basket holds the items for the order
//                 });
//                 setClientSecret(response.data.clientSecret);
//             } catch (error) {
//                 console.log('Error fetching client secret:', error);
//             }
//         };

//         getClientSecret();
//     }, [basket]);

// console.log ('THE SECRET IS >>>',clientSecret);
//     const handleSubmit = async(event) =>{
//         event.preventDefault();
//         setProcessing(true);
//         const payload = await stripe.confirmCardPayment(clientSecret,{
//             payment_method:{
//    card:element.getElement(CardElement),
//             }
//         }).then (({paymentIntent}) =>{
//         // paymentIntent =Payment Confirmation
//         db.collection ('users')
//         .doc(user?.uid)
//         .collection('orders')
//         .doc(paymentIntent.id)
//         .set({
//             basket:basket,
//             amount:paymentIntent.amount,
//             created:paymentIntent.created,
//         });
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         dispatch({
//             type:'EMPTY_BASKET'
//         })
//             navigate.replace('/orders')
//         })
//     }   
//     const handleChange = (event) =>{
// setDisabled(event.empty);
// setError(event.error ?event.error.message :'');
//     }

    
//     return (
//         <div className='Payment'>
//             <div className='payment__container'>
//                 <h1>
//                     Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
//                 </h1>
//                 <div className="payment__section"></div>
//                 <div className='payment__title'>
//                     <h3>Delivery Address</h3>
//                 </div>
//                 <div className='payment__address'>
//                     <p>{user?.email} </p>
//                     <p>123 React lane</p>
//                     <p>chicago,IL</p>
//                 </div>
//                 <div className="payment__section">
//                     <div className='payment__title'>
//                         <h3>Review items and delivery</h3>
//                     </div>
//                     <div className='payment__items'>
//                         {basket.map((item) =>
//                             <Checkoutproduct
//                                 id={item.id}
//                                 title={item.title}
//                                 image={item.image}
//                                 price={item.price}
//                                 rating={item.rating}
//                             />
//                         )}
//                     </div>
//                     <div className="payment__section">
//                         <div className='payment__title'>
//                             <h3>Payment method</h3>
//                         </div>
//                         <div className='payment__details'>
//                             <form on onSubmit={handleSubmit}>
//                                 <CardElement onChange={handleChange} />
//                                 <div className='payment__priceContainer'>
//                                     <CurrencyFormat
//                                         renderText={(value) => <h3>order Total:{value}</h3>}
//                                         decimalScale={2}
//                                         value={getBasketTotal(basket)}
//                                         displayType={'text'}
//                                         thousandSeparator={true}
//                                         prefix={'$'}
//                                     />
//                                     <button disabled={processing || disabled || succeeded}>
//                                         <span>{processing ? <p>processing</p> : "buy now"}</span>
//                                     </button>
//                                 </div>
//                                 {error&&<div>{error}</div>}
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     )
// }

//  export default Payment

