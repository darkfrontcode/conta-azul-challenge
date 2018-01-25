import { Request as req, Response as res } from 'express'

const result = new Object(
	{
		status: 'OK'
	}
)

export class SecurityController
{
	public static url = '/api/security'

	constructor(req:req, res:res)
	{
		res.status(200).json(result)	
	}
}