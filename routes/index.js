import { Router } from 'express'

// import bevsRoutes from './bevs.js'
import usersRoutes from './users.js'


const router = Router()
router.get("/", (req, res) => res.send("This is the API root!!!"))
router.use('/', usersRoutes)

export default router
