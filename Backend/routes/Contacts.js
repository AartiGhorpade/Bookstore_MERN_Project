import { ContactDetails } from "../controller/Contact.controller.js";
import express from 'express'

const router = express.Router()

router.post('/contact', ContactDetails)

export default router