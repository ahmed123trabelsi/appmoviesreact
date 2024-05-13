import axios from "axios";
const url = "http://localhost:3003/movies";
export const getallMovies = async (id) => {
 id = id || "";
 return await axios.get(`${url}/${id}`);
};
export const addMovie = async (event) => {
 return await axios.post(url, event);
};