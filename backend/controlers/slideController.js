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
    const newSlide = new Slide({...slide, createdAt: new Date().toISOString()});

    try {
       await newSlide.save();

        //https://www.restapitutorial.com/httpstatuscodes.html
        
       res.status(201).json(newSlide);
    } catch (error) {
       res.status(409).json({message: error.message}); 
    }
}


const deleteSlide = asyncHandler(async (req, res) => {
    
    const slide = await Slide.findById(req.params.id)
    if(slide){
        await slide.remove()
        res.json({message : 'Slide removed'})
    }else{
        res.status(404)
        console.log("api error")
        throw new Error('Slide not found')
    }
    
    
})

const getSlideById = asyncHandler(async (req, res) => {
    const slide =  await Slide.findById(req.params.id)
    if(slide){
        res.json(slide)
    } else{
        // status it's 500 by default cuz of errHandler
        res.status(404)
        throw new Error('Product not found')
    }
})



const updateSlide = asyncHandler(async (req, res) => {
    const {name,image,description} = req.body
   console.log(name,image,description)
    const slide = await Slide.findById(req.params.id)
    console.log(slide)
    if(slide){
        slide.name = name
        slide.description = description
        slide.image = image
    const updatedSlide = await slide.save();
   
    res.json(updatedSlide)

    }else{
        res.status(404)
        throw new Error('Product Not found')
    }
})

export {getSlides, createSlide, deleteSlide, getSlideById, updateSlide}