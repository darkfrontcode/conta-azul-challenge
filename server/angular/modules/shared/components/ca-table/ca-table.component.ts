import { Component, Input, Output, EventEmitter } 	from '@angular/core'
import { IVehicleTrackable } 						from 'models'
import { CAImagePreviewService }					from '../ca-image-preview/ca-image-preview.service'

@Component({
	selector: 'ca-table',
	templateUrl: './ca-table.template.pug',
	styleUrls: ['./ca-table.style.styl'],
})
export class CATableComponent
{
	public start: number
	public end: number
	public offset: number
	private _checkboxState: boolean

	@Input()
	public data: Array<IVehicleTrackable>

	@Output()
	public dataChange = new EventEmitter<Array<IVehicleTrackable>>()

	constructor(private imagePreviewService: CAImagePreviewService)
	{
		this.offset = 5
		this.start = 0
		this.end = 5
	}

	public activeClass(state: boolean) : string
	{
		return state ? 'active' : ''
	}

	get checkboxState()
	{
		return this._checkboxState
	}

	set checkboxState(state: boolean)
	{
		this._checkboxState = state

		this.data = this.data.map((vehicle: IVehicleTrackable) => {
			vehicle.check = state
			return vehicle
		})

		this.dataChange.emit(this.data)
	}

	public open(url: string) : void
	{
		this.imagePreviewService.open(url)
	}

}