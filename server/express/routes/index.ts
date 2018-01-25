import { Request as req, Response as res, Router } from 'express'
import { ClientController } from '../controllers/client/cliente.controller'
import { SecurityController, VehiclesController } from '../controllers/api'

const router = Router()

// client routes
router.get(ClientController.url, (req:req, res:res) => new ClientController(req, res))

// api routes
router.get(SecurityController.url, (req:req, res:res) => new SecurityController(req, res))
router.get(VehiclesController.url, (req:req, res:res) => new VehiclesController(req, res))

export default router