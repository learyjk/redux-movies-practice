import React, { useEffect } from 'react';
import MovieList from '../MovieList/MovieList';
import movieApi from '../../common/movieApi';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';



const Home = () => {
  const movieText = "Harry"
  const dispatch = useDispatch();
  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${API_KEY}&s=${movieText}&type=movie`).catch((err) => {
        console.log(err)
      })
      dispatch(addMovies(response.data))
    }

    fetchMovies()
  }, [])

  return (
    <>
      <div className='banner-image'>
      </div>
      <MovieList />
    </>

  );
};

export default Home;