import { Request as req, Response as res } from 'express'
import { VehicleList } from '../../vehicles'

export class VehiclesController
{
	public static url = '/api/vehicles'

	constructor(req:req, res:res)
	{
		res.status(200).json(VehicleList)	
	}
}