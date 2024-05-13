// Movies.js
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { Row } from 'react-bootstrap';
import { getallMovies } from '../services/api';
import SearchBar from './SearchBar'; // Importez le nouveau composant SearchBar

export default function Movies() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getallMovies();
        setData(result.data);
        setFilteredData(result.data); // Initialisez filteredData avec tous les films
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredData(data); // Si la recherche est vide, affichez tous les films
    } else {
      const filtered = data.filter((movie) =>
        movie.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredData(filtered); // Sinon, filtrez les films par le terme de recherche
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Row xs={1} md={4} className="g-4">
        {filteredData.length > 0 ? (
          filteredData.map((movie) => (
            <Movie
              event={movie}
              key={movie.id}
            />
          ))
        ) : (
          <p>No result found</p> // Affichez ce message si aucun film n'est trouvé
        )}
      </Row>
    </>
  );
}
