import { Component, OnInit } 		from '@angular/core'

import { IVehicleTrackable }		from '../../../shared/models'
import { VehicleService } 			from '../../../shared/services/vehicle.service'
import { CAImagePreviewService } 	from '../../../shared/components/ca-image-preview/ca-image-preview.service'

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.template.pug',
	styleUrls: ['./dashboard.style.styl']
})
export class DashboardComponent implements OnInit
{
	private _search: string

	public vehicles: Array<IVehicleTrackable>
	public queryList: Array<IVehicleTrackable>
	public createVehicleState = false

	constructor(
		private vehicleService: VehicleService,
		private imagePreviewService: CAImagePreviewService
	)
	{
		
	}

	ngOnInit() : void
	{
		const { vehicles$, queryList$ } = this.vehicleService

		vehicles$.subscribe(vehicles => (this.vehicles = vehicles))
		queryList$.subscribe(query => (this.queryList = query))
	}
	
	get imagePreviewState()
	{
		return this.imagePreviewService.state
	}

	set imagePreviewState(state: boolean)
	{
		this.imagePreviewService.state = state
	}

	get search()
	{
		return this._search
	}

	set search(value:string)
	{
		this.searchVehicle(value)
		this._search = value
	}

	public createVehicleOpen() : void
	{
		this.createVehicleState = true
	}

	public remove() : void
	{
		this.vehicleService.remove()
	}

	public searchVehicle(value: string)
	{
		this.vehicleService.search(value)
	}

	public showRemove() : boolean
	{
		return this.vehicles.some((vehicle:IVehicleTrackable) => vehicle.check)
	}

	public showVehiclesList() : boolean
	{
		return this.queryList == null || this.queryList.length == 0
	}

	public noVehicles() : boolean
	{
		return this.vehicles.length==0
	}

}