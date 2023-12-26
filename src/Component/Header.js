import React from 'react'
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

function Header() {
  const [{ basket, user}, dispatch] = useStateValue();
  const handlauthenticaton= ()=>{
    if(user){
      auth.signOut();

    }
  }
  return (
    
      <div className='header'>
        <Link to="/">
          <img className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
        </Link>
        <div className='header_search'>
          <input className='header_serchInput' type='text' />
          <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <Link to={!user && "/login"}>
            <div onClick={handlauthenticaton}className='header_option'>
            <span className='header_optionLineOne'>
                Hello {!user ? 'Guest' : user.email}</span>
            <span className='header_optionLineTwo'>
            {user ? 'sign Out':'sign In'}
            </span>
          </div>
        </Link>
        <Link to='orders' className='header_clearlink'>
          <div className='header_option'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>Order</span>
          </div>
        </Link>
          <div className='header_option'>
            <span className='header_optionLineOne'>your</span>
            <span className='header_optionLineTwo'>prime</span>
          </div>
          <Link to="/Checkout" className='header_clearlink'>

            <div className='header_optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionLineTwo header_basketCount'>{basket.length}</span>
            </div>
          </Link>
        </div>

      </div>

    
  )
}

export default Header

