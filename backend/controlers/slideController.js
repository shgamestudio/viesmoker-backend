import mongoose from "mongoose";
import express from 'express';
import asyncHandler from 'express-async-handler'
import Slide from '../models/slideModel.js'


// export const getSlides = async (req, res) => {
    
//     try {
//         const slides = await Slide.find({})
//         res.json(slides)
//     } catch (error) {
//         res.status(409).json({message: error.message});
//     }

// }
const getSlides = asyncHandler(async (req, res) => {
    
    const slides = await Slide.find({})
    res.json(slides)

    
    
})



const createSlide = async (req, res) => {
    const slide = req.body;
    const newSlide = new PostMessage({...slide, creator: req.user._id, createdAt: new Date().toISOString()});

    try {
       await newSlide.save();

        //https://www.restapitutorial.com/httpstatuscodes.html
        
       res.status(201).json(newSlide);
    } catch (error) {
       res.status(409).json({message: error.message}); 
    }
}

export {getSlides, createSlide}