import e from 'express';
import express from 'express';
import asyncHandler from 'express-async-handler';
import { getPersonPopular, getPerson, getPersonImages, getPersonCombinedCredit } from '../tmdb-api';

const router = express.Router();
let Regex = /^[1-9][0-9]*$/;

router.get('/tmdb/popular/page:page', asyncHandler(async (req, res) => {
    const page = req.params.page;
    if (!Regex.test(page)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const popular = await getPersonPopular(page);
        res.status(200).send(popular);
    }
    }));

router.get('/tmdb/person/:id', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const person = await getPerson(id);
        res.status(200).send(person);
    }
    }));

router.get('/tmdb/person/:id/images', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const images = await getPersonImages(id);
        res.status(200).send(images);
    }
    }));

router.get('/tmdb/person/:id/combined_credits', asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (!Regex.test(id)) {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
    else {
        const combined_credits = await getPersonCombinedCredit(id);
        res.status(200).send(combined_credits);
    }
    }));

export default router;