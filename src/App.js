import "./App.css";
import Checkout from "./Component/Checkout";
import Home from "./Component/Home";
import Shared from "./Shared";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Component/Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Component/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Component/Orders";

const promise = loadStripe(
  'pk_test_51OPs99BwHSez29wQztiyD9RDx6nv2vE7tFkwhcPhmM98mP2ulQlF53LTtqA3ik94lf3hMjd2OIcwGL7WnilBwXss004M84UiQH'
);


function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // ¨the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });

      }
    })

  }, []);
  return (
    
    <div className="App">

      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Home />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="Payment" element=

            {<Elements stripe={promise}>
              <Payment />
            </Elements>}

          />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route path="Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;





// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import Login  from "./Component/Login"
// import Payment from './Component/Payment';
// import Header from './Component/Header';
// import Orders from './Component/Orders';
// import Home from './Component/Home';
// import Checkout from './Component/Checkout';
// import { useStateValue } from './StateProvider'

// function App() {
//   const [{ }, dispatch] = useStateValue();
//   const [stripe, setStripe] = useState(null);

//   useEffect(() => {
//     const fetchStripeKey = async () => {
//       try {
//         const stripeKey = await fetch('/api/stripe-key'); 
//         const stripePublicKey = await stripeKey.text();
//         const stripeInstance = await loadStripe(stripePublicKey);
//         setStripe(stripeInstance);
//       } catch (error) {
//         console.error("Error initializing Stripe:", error);
//       }
//     };

//     fetchStripeKey();
//   }, []);

  

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/payment"
//             element={stripe && (
//               <Elements stripe={stripe}>
//                 <Payment />
//               </Elements>
//             )}
//           />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/checkout" element={<Checkout />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
