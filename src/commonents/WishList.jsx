import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, clearWishlist } from '../redux/slices/wishlistSlice';

export default function WishList() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.movies);

  const handleRemoveFromWishlist = (movieId) => {
    dispatch(removeFromWishlist(movieId));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div>
      {wishlistItems.map((movie) => (
        <div key={movie.id}>
          {movie.title}
          <button onClick={() => handleRemoveFromWishlist(movie.id)}>X</button>
        </div>
      ))}
      {wishlistItems.length > 0 && (
        <button onClick={handleClearWishlist}>Clear Wishlist</button>
      )}
    </div>
  );
}
