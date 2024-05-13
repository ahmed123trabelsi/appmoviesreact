import React, { useState } from 'react'
import { Alert, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieToWishlist, addToWishlist } from '../redux/slices/wishlistSlice';

export default function Movie({ event}) {
    const [ev, setEv] = useState(event);
    const [rating, setRating] = useState(ev.rating || []);
    const [newRating, setNewRating] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false); // Pour afficher le message de succès
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.movies); // Sélectionnez les films de la wishlist depuis le state global
    const handleAddToWishlist = async () => {
        const actionResult = await dispatch(addMovieToWishlist(event));
        const message = actionResult.payload; // Récupérez le message retourné par l'action
        if (message === 'Added to wishlist') {
          setShowSuccess(true);
          setTimeout(() => {
            setShowSuccess(false);
          }, 2000);
        } else {
          setShowAlert(true);
          setAlertMessage(message); // Utilisez un nouvel état pour le message d'alerte
          setTimeout(() => {
            setShowAlert(false);
          }, 2000);
        }
      };
    const handleRating = () => {
        const numRating = Number(newRating);
        if (numRating >= 1 && numRating <= 5) {
          setRating([...rating, numRating]);
          setEv({ ...ev, rating: [...rating, numRating] });
          setNewRating('');
          setShowAlert(false);
        } else {
            window.alert('Please enter a rating between 1 and 5'); // Ajoutez cette ligne pour afficher l'alerte
          setShowAlert(true);
        }
      }; 
    
      const getAverageRating = () => {
        if (rating.length === 0) return 'No ratings yet';
        const sum = rating.reduce((acc, r) => acc + r, 0);
        return (sum / rating.length).toFixed(1);
      };
   
  return (
    <>          
     <Card style={{ width: "18rem" }} className="me-5 mt-4">
    <Card.Img variant="top" src={`src/assets/${ev.img}`} />
    <Card.Body>
    <Card.Title>
    <Link  to={`/movies/${ev.id}`}>{ev.title}</Link>
    </Card.Title>
      <Card.Text>{ev.year}</Card.Text>
      <Card.Text>Price: {ev.genre}</Card.Text>
      <Card.Text>Tickets: {ev.description}</Card.Text>
 


      <Button variant="outline-primary" onClick={handleAddToWishlist}>
        Add to Wishlist
  
      </Button>
      {showSuccess && <Alert variant="success">Added to wishlist</Alert>}
    {showAlert && <Alert variant="danger">{alertMessage}</Alert>}
      <p>Number of items in wishlist: {wishlist.length}</p>
      <Card.Text>Rating: {getAverageRating()}</Card.Text>
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
          placeholder="Rate 1-5"
        />
        <Button variant="outline-primary" onClick={handleRating}>
          Rate
        </Button>
      
    </Card.Body>
  </Card></>
  )
}
