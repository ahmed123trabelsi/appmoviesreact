import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../src/App.css';
import { useSelector } from 'react-redux';
export default function NavigationBar() {
    const wishlistItems = useSelector((state) => state.wishlist.movies); // Récupérez les films de la wishlist depuis l'état global
  return (
    <>  <nav>
<NavLink 
    to="/movies"   
    style={{ textDecoration: 'underline' }}
>movies</NavLink>
<br />
<Link to="/WishList">Wishlist ({wishlistItems.length})</Link>
    </nav></>
  )
}
