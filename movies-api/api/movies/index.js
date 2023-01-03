import express from 'express';
import { movies, movieReviews, movieDetails } from './moviesData';
import uniqid from 'uniqid'
import movieModel from './movieModel';
import asyncHandler from 'express-async-handler';
import { getUpcomingMovies, getTopRatedMovies, getMovies, getMovie, getMovieImages, getMovieReviews, getMovieCredits } from '../tmdb-api';

const router = express.Router(); 
let Regex = /^[1-9][0-9]*$/;

router.get('/', asyncHandler(async (req, res) => {
    const movies = await movieModel.find();
    res.status(200).json(movies);
}));

// Get movie details
// Get movie details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    } 
    else {
        const movie = await movieModel.findByMovieDBId(id);
        if (movie) {
            res.status(200).json(movie);
        } 
        else {
            res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
        }
    }
}));

// Get movie reviews
router.get('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        // find reviews in list
        if (movieReviews.id == id) {
            res.status(200).json(movieReviews);
        } 
        else {
            res.status(404).json({
                message: 'The resource you requested could not be found.',
                status_code: 404
            });
        }
    }
});

//Post a movie review
router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        if (movieReviews.id == id) {
            req.body.created_at = new Date();
            req.body.updated_at = new Date();
            req.body.id = uniqid();
            movieReviews.results.push(req.body); //push the new review onto the list
            res.status(201).json(req.body);
        } 
        else {
            res.status(404).json({
                message: 'The resource you requested could not be found.',
                status_code: 404
            });
        }
    }
});

router.get('/tmdb/upcoming/page:page', asyncHandler( async(req, res) => {
    const page = parseInt(req.params.page);
    if (!Regex.test(page)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const upcomingMovies = await getUpcomingMovies(page);
        res.status(200).json(upcomingMovies);
    }
  }));

router.get('/tmdb/top_rated/page:page', asyncHandler(async (req, res) => {
    const page = parseInt(req.params.page);
    if (!Regex.test(page)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const topRatedMovies = await getTopRatedMovies(page);
        res.status(200).json(topRatedMovies);
    }
}));

  router.get('/tmdb/discover/page:page', asyncHandler(async (req, res) => {
    const page = parseInt(req.params.page);
    if (!Regex.test(page)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const movies = await getMovies(page);
        res.status(200).json(movies);
    }
}));

router.get('/tmdb/movie/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const movie = await getMovie(id);
        res.status(200).json(movie);
    }
}));

router.get('/tmdb/movie/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const images = await getMovieImages(id);
        res.status(200).json(images);
    }
}));

router.get('/tmdb/movie/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const reviews = await getMovieReviews(id);
        res.status(200).json(reviews);
    }
}));

router.get('/tmdb/movie/:id/movie_credits', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const credits = await getMovieCredits(id);
        res.status(200).json(credits);
    }
}));

export default router;