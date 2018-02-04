import { Injectable } from '@angular/core'

@Injectable()
export class ValidationsService
{
	public valid(validations:Array<boolean>) : string
	{
		const validity = validations.every((validation:boolean) => validation)
		return validity == true ? 'valid' : ''
	}

	public invalid(validations:Array<boolean>) : string
	{
		const validity = validations.every((validation:boolean) => validation)
		return validity == true ? 'invalid' : ''
	}
}