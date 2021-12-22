import { Router } from "express";
import * as controllers from '../controllers/users.js'

const router = Router()

router.post('/sign-up', controllers.signUp)


export default router 
