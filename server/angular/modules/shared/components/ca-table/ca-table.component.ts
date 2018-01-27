import { 
	Component, 
	Input, 
	Output, 
	EventEmitter,
	OnChanges,
	SimpleChanges
} 													from '@angular/core'
import { IVehicleTrackable } 						from 'models'
import { CAImagePreviewService }					from '../ca-image-preview/ca-image-preview.service'

@Component({
	selector: 'ca-table',
	templateUrl: './ca-table.template.pug',
	styleUrls: ['./ca-table.style.styl'],
})
export class CATableComponent implements OnChanges
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

	ngOnChanges(changes: SimpleChanges)
	{
		const { currentValue:current } = changes.data

		if(!current.some((vehicle: IVehicleTrackable) => vehicle.check))
		{
			this._checkboxState = false
		}

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
		this.data = this.selectAll(state)
		this.dataChange.emit(this.data)
	}

	public open(url: string) : void
	{
		this.imagePreviewService.open(url)
	}

	public selectAll(state: boolean) : Array<IVehicleTrackable>
	{
		return this.removeDuplicates(
					this.merge(
						new Array<any>(
							this.data, 
							this.changeSelectionSlice(this.data, state)
						)
					)
				)
	}

	public removeDuplicates<T>(arr: Array<T>) : Array<T>
	{
		return new Array<T>(...new Set(arr))
	}

	public merge<T>(arr: Array<Array<T>>) : Array<T>
	{
		return arr.reduce((all:Array<any>, item:any, index:number) => {
			all.push(...item)
			return all
		}, new Array<T>())
	}

	public changeSelectionSlice(vehicles: Array<IVehicleTrackable>, state: boolean) : Array<IVehicleTrackable>
	{
		return vehicles
				.slice(this.start, this.end)
				.map((vehicle: IVehicleTrackable) => this.changeSelection(vehicle, state))
	}

	public changeSelection(vehicle: IVehicleTrackable, state: boolean) : IVehicleTrackable
	{
		vehicle.check = state
		return vehicle
	}

}