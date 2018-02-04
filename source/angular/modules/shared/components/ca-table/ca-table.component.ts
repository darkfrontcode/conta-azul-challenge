import { 
	Component, 
	Input, 
	Output, 
	EventEmitter,
	OnChanges,
	SimpleChanges
} 													from '@angular/core'
import { IVehicleTrackable } 						from '../../../shared/models'
import { CAImagePreviewService }					from '../ca-image-preview/ca-image-preview.service'
import { ArrayUtils }								from '../../services/array.utils'

enum PROPS
{
	CHECK = 'check'
}

@Component({
	selector: 'ca-table',
	templateUrl: './ca-table.template.pug',
	styleUrls: ['./ca-table.style.styl'],
})
export class CATableComponent implements OnChanges
{
	private _checkboxState: boolean
	
	public start: number
	public end: number
	public offset: number

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
		const selection = ArrayUtils.sliceSome(current, this.start, this.end, PROPS.CHECK, true)

		if(!selection)
		{
			if(this.start == current.length) this.moveBackwards()
			this.unmarkCheckbox()
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

	public unmarkCheckbox()
	{
		this._checkboxState = false
	}

	public open(url: string) : void
	{
		this.imagePreviewService.open(url)
	}

	private selectAll(state: boolean) : Array<IVehicleTrackable>
	{
		const sliceTrack 		= ArrayUtils.sliceTrack(this.data, this.start, this.end)
		const changeProps 		= ArrayUtils.changeProps(sliceTrack, PROPS.CHECK, state)
		const arrays 			= new Array<any>(this.data, changeProps)
		
		return ArrayUtils.unique(ArrayUtils.merge(arrays))
	}

	public resetSelection() : void
	{
		this.unmarkCheckbox()
		this.data = ArrayUtils.changeProps(this.data, PROPS.CHECK, false)
	}

	private moveBackwards()
	{
		this.start -= this.offset
		this.end -= this.offset
	}

}
