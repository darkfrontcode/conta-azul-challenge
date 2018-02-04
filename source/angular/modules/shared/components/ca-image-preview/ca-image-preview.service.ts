import { Injectable } from '@angular/core'

@Injectable()
export class CAImagePreviewService
{
	public state: boolean
	public image: string | null

	constructor()
	{
		this.state = false
		this.image = null
	}

	open(url: string)
	{
		this.image = url
		this.state = true
	}

	close()
	{
		this.state = false
	}

}