import express from 'express'
import { getBookData } from '../controller/Books.controller.js'

const router = express.Router()

router.get('/', getBookData)
export default router

