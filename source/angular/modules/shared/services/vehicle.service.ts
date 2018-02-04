import { Injectable } 						from '@angular/core'
import { Http, RequestOptions, Headers } 	from '@angular/http'
import { BehaviorSubject }					from 'rxjs/BehaviorSubject'
import { Observable } 						from 'rxjs/Observable'
import { URLTYPES } 						from '../enums'
import { IVehicle, IVehicleTrackable }		from '../models'
import { VehicleUtilityService }			from './vehicle-utility.service'

@Injectable()
export class VehicleService
{
	private _vehicles$ 		= new BehaviorSubject<Array<IVehicleTrackable>>(new Array<IVehicleTrackable>())
	private _queryList$ 	= new BehaviorSubject<Array<IVehicleTrackable> | null>(null)
	
	public vehicles$ 		= this._vehicles$.asObservable()
	public queryList$ 		= this._queryList$.asObservable()

	constructor(private http: Http, private utility: VehicleUtilityService)
	{

	}

	get vehicles()
	{
		return this._vehicles$.getValue()
	}

	set vehicles(vehicles: Array<IVehicleTrackable>)
	{
		this._vehicles$.next(vehicles)
	}

	get queryList()
	{
		return this._queryList$.getValue()
	}

	set queryList(vehicles:Array<IVehicleTrackable> | null)
	{
		this._queryList$.next(vehicles)
	}

	public requestVehicles() : Observable<Array<IVehicleTrackable>>
	{
		return this.http
			.get(URLTYPES.VEHICLES)
			.map(res => this.utility.convertArrayToTrackable(res.json()))
	}

	public addVehiclesToStore(vehicles: Array<IVehicleTrackable>) : void
	{
		this.vehicles = vehicles
	}

	public search(query:string)
	{
		const matches = new Array<IVehicleTrackable>()
		const regex = new RegExp(query, 'i')

		this.vehicles.filter((vehicle:IVehicleTrackable) => {

			const match = new Array<any>(
				vehicle.marca.match(regex),
				vehicle.combustivel.match(regex)
			).some((v:any) => v != null)

			if(match) matches.push(vehicle)

		})

		this.queryList = matches
	}

	public findById(id: number) : IVehicleTrackable
	{
		return <IVehicleTrackable>this.vehicles.filter(vehicle => vehicle.id === id).pop()
	}

	public remove()
	{
		this.http
			.delete(URLTYPES.VEHICLES, new RequestOptions({ 
				headers: new Headers({ 'Content-Type': 'application/json' }),
				body: this.utility.reduceToId(this.vehicles) 
			}))
			.subscribe(() => {
				this.vehicles = this.vehicles.filter(vehicle => !vehicle.check)
				this.updateQueryList()
			})
	}

	public add(vehicle:IVehicle)
	{	
		const newVehicle = this.utility.buildVehicle(vehicle, this.vehicles)

		this.http
			.post(URLTYPES.VEHICLES, newVehicle)
			.subscribe(() => this.vehicles = new Array<IVehicleTrackable>(
				...this.vehicles, 
				this.utility.convertToTrackable(newVehicle)
			))
	}

	private updateQueryList()
	{
		if(this.queryList != null)
		{
			this.queryList = this.queryList.filter(vehicle => !vehicle.check)
		}
	}

}