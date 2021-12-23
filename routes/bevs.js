import { Router } from 'express'
import * as controllers from '../controllers/bevs.js'
import restrict from '../helpers/restrict.js'


const router = Router()
router.get('/bevs', controllers.getBevs)
router.get('/bevs/:_id', controllers.getBev)
router.post('/create', restrict, controllers.createBev)







export default router