import { Injectable } 			from '@angular/core'
import { BehaviorSubject }		from 'rxjs/BehaviorSubject'

@Injectable()
export class CALoaderService
{
	private _state$ 		= new BehaviorSubject<boolean>(true)
	private _DOMReady$ 		= new BehaviorSubject<boolean>(false)

	public state$ 			= this._state$.asObservable()
	public DOMReady$ 		= this._DOMReady$.asObservable()

	set state(state:boolean)
	{
		this._state$.next(state)
	}

	set DOMReady(state:boolean)
	{
		this._DOMReady$.next(state)
	}

	open()
	{
		this.state = true
	}

	close()
	{
		this.state = false
	}

	ready()
	{
		this.DOMReady = true
	}

}