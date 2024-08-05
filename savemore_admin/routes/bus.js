import express from 'express'
import * as busController from '../controller/bus.js'

const router = express.Router()

// router.get('/',(req,res)=>{
//     res.status(200).send('구 리스트확인')
// })

router.get('/:region', busController.getAllbyGu);

export default router