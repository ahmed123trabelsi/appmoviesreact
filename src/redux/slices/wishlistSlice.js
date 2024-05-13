// features/wishlistSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// features/wishlistSlice.js
export const addMovieToWishlist = createAsyncThunk(
  'wishlist/addMovieToWishlist',
  async (movie, { getState, dispatch }) => {
    const exists = getState().wishlist.movies.some((m) => m.id === movie.id);
    if (!exists) {
      dispatch(addToWishlist(movie));
      return 'Added to wishlist';
    } else {
      return 'Movie already exists';
    }
  }
);


export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    movies: [],
    message: '',
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.movies.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.movies = [];
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = '';
    },
  },
});

export const { setMessage, clearMessage, addToWishlist, removeFromWishlist,  clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
