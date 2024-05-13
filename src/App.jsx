import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from './commonents/Movies';
import MovieDetails from './commonents/MovieDetails';
import NotFound from './commonents/NotFound';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './commonents/NavigationBar';
import WishList from './commonents/WishList';

function App() {


  return (
    <>
 <NavigationBar />
  <Suspense fallback={<div>loading..</div>}> 
  <Routes>
    
 
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
   
          <Route path="/WishList" element={<WishList/>} />
     

  <Route path="*" element={<NotFound />} />
 </Routes> </Suspense> 
    </>
  )
}

export default App
