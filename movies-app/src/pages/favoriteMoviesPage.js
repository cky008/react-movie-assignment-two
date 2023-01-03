import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const FavoriteMoviesPage = () => {

  const userContext = useContext(AuthContext);

  const { pagination } = useParams();

  const { favourites } = useContext(MoviesContext);

  if(!userContext.isAuthenticated) {
    MoviesContext.favourites = []
  }

  // Create an array of queries and run in parallel.
  const favoriteMovieQueries = useQueries(
    favourites.map((movieId) => {
      return {
        queryKey: ["movie", movieId],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favoriteMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = favoriteMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  // const toDo = () => true;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
      page="/movies/favorites"
      pagination={pagination}
    />
  );
};

export default FavoriteMoviesPage;