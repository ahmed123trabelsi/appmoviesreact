import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getallMovies } from '../services/api';
import { Card } from 'react-bootstrap';

const MovieDetails = () => {
    const [data, setData] = useState([]);
    const { id} = useParams();
    const movie = data.find(movie => movie.id === id);
    const fetchData = async () => {
        try {
          const result = await getallMovies();
          setData(result.data);
        } catch (error) {
          console.error("Error fetching event data:", error);
        }
      };
   fetchData();
   if (!movie) {
    return <div>No movie found for the id</div>; // Handling no event found
}

  // Rendu des détails du film
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`/src/assets/${movie.img}`} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Card.Text>
          Year: {movie.year} 
        </Card.Text>
        {/* Ajoutez d'autres détails que vous souhaitez afficher */}
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
