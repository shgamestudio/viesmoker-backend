import express from 'express'

import { getSlides, createSlide} from '../controlers/slideController.js'
import { protect,admin } from '../middleware/authMiddleware.js'


const router = express.Router()


router.route('/').get(getSlides).post(protect,admin,createSlide)

export default router