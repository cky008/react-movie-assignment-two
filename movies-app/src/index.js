import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from'./pages/upComingMoviesPage'
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PersonPage from './pages/personPage';
import PersonDetailsPage from './pages/personDetailsPage'
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ResetPage from "./pages/resetPage";
import TopRatedPage from "./pages/topRatedPage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route element={<ProtectedRoutes />}>
              <Route exact path="/movies/favorites/page:pagination" element={<FavoriteMoviesPage />} />
            </Route>
            <Route exact path="/movies/upcoming/page:pagination" element={<UpcomingMoviesPage />} />
            <Route exact path="/movies/toprated/page:pagination" element={<TopRatedPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/page:pagination" element={<HomePage />} />
            <Route path="/person/page:pagination" element={ <PersonPage/> } />
            <Route path="/person/:id" element={ <PersonDetailsPage/> } />
            <Route path="*" element={ <Navigate to="/page1" /> } />
            <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/reset" element={<ResetPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);