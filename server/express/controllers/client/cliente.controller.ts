import { Request as req, Response as res } from 'express'

export class ClientController
{
	public static url = '/'

	constructor(req:req, res:res)
	{
		res.render('layout')	
	}
}