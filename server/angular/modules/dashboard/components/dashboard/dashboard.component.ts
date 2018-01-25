import { Component, OnInit } 		from '@angular/core'

import { IVehicleTrackable }		from 'models'
import { VehicleService } 			from '../../../shared/services/vehicle.service'
import { CAImagePreviewService } 	from '../../../shared/components/ca-image-preview/ca-image-preview.service'

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.template.pug',
	styleUrls: ['./dashboard.style.styl']
})
export class DashboardComponent implements OnInit
{
	public createVehicleState: boolean
	private _search: string

	constructor(
		private vehicleService: VehicleService,
		private imagePreviewService: CAImagePreviewService
	)
	{
		this.createVehicleState = false
	}

	ngOnInit() : void
	{
		this.vehicleService.requestVehicles()
	}

	get vehicles()
	{
		return this.vehicleService.vehicles
	}

	set vehicles(vehicles: Array<IVehicleTrackable>)
	{
		this.vehicleService.vehicles = vehicles
	}

	get queryList()
	{
		return this.vehicleService.queryList
	}

	set queryList(query:Array<IVehicleTrackable> | null)
	{
		this.vehicleService.queryList
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
		return this.vehicles.some((vehicle:IVehicleTrackable) => (vehicle.check))
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