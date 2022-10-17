import express from 'express'

import { getSlides, createSlide, deleteSlide, getSlideById, updateSlide} from '../controlers/slideController.js'
import { protect,admin } from '../middleware/authMiddleware.js'


const router = express.Router()


router.route('/').get(getSlides).post(protect,admin,createSlide)

router.route('/:id').delete(protect,admin,deleteSlide).get(getSlideById).put(protect,admin,updateSlide)

export default router