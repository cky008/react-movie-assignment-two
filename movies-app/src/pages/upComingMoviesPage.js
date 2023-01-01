import React from "react";
import { getUpComingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchIcon from '../components/cardIcons/addToWatch'
import { useParams } from "react-router-dom";


const UpcomingMoviesPage = (props) => {

  const { pagination } = useParams();

  const {  data, error, isLoading, isError }  = useQuery(["discoverUpcoming", pagination], getUpComingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

    // // Redundant, but necessary to avoid app crashing.
    // const toWatch = movies.filter(m => m.toWatch)
    // localStorage.setItem('toWatch', JSON.stringify(toWatch))
  

  return (
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie) => {
        return <AddToWatchIcon movie={movie} />
      }}
      page="/movies/upcoming"
      pagination={pagination}
      total_pages={data.total_pages}
    />
  );
};

export default UpcomingMoviesPage;