import { Router } from 'express'
import * as controllers from '../controllers/bevs.js'
import restrict from '../helpers/restrict.js'


const router = Router()
router.get('/bevs', controllers.getBevs)
router.get('/bevs/:type', controllers.getBevsType)
router.get('/bev/:_id', controllers.getBev)
router.post('/create', restrict, controllers.createBev)
router.put('/edit/:_id', restrict, controllers.updateBev)
router.delete('/edit/:_id', restrict, controllers.deleteBev)


export default router