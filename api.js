import {Router} from 'express'
import Room from './room'
import User from './user'
import notify from './notify'

const router = Router()

console.log("eiei");
router.use('/room',Room)
router.use('/user', User)
router.use('/notify',notify)


export default router;