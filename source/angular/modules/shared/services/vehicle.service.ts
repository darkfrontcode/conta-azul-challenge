import { Injectable } 						from '@angular/core'
import { Http } 							from '@angular/http'
import { BehaviorSubject }					from 'rxjs/BehaviorSubject'
import { Observable } 						from 'rxjs/Observable'
import { URLTYPES } 						from '../enums'
import { 
	IVehicle, 
	IVehicleTrackable, 
	VehicleBuilder 
}											from '../models'

@Injectable()
export class VehicleService
{
	private _vehicles$ 		= new BehaviorSubject<Array<IVehicleTrackable>>(new Array<IVehicleTrackable>())
	private _queryList$ 	= new BehaviorSubject<Array<IVehicleTrackable> | null>(null)
	
	public vehicles$ 		= this._vehicles$.asObservable()
	public queryList$ 		= this._queryList$.asObservable()

	constructor(private http: Http)
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
			.map(res => this.convertArrayToTrackable(res.json()))
	}

	public convertArrayToTrackable(vehicles: Array<IVehicle>) : Array<IVehicleTrackable>
	{
		return <Array<IVehicleTrackable>>vehicles.map((vehicle: IVehicle) => this.convertToTrackable(vehicle))
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
		return <IVehicleTrackable>this.vehicles.filter((vehicle:IVehicleTrackable) => vehicle.id === id).pop()
	}

	public remove()
	{
		this.vehicles = this.vehicles.filter((vehicle: IVehicleTrackable) => (!vehicle.check ? vehicle : undefined))
		this.updateQueryList()
	}

	private updateQueryList()
	{
		if(this.queryList != null)
		{
			this.queryList = this.queryList.filter((vehicle: IVehicleTrackable) => (!vehicle.check ? vehicle : undefined))
		}
	}

	public add(vehicle:IVehicle)
	{	
		this.vehicles = new Array<IVehicleTrackable>(...this.vehicles, this.convertToTrackable(this.buildVehicle(vehicle)))
	}

	public convertToTrackable(vehicle:IVehicle) : IVehicleTrackable
	{
		const trackable = <IVehicleTrackable>vehicle
		trackable.check = false
		return trackable
	}

	public buildVehicle(vehicle:IVehicle) : IVehicle
	{
		return VehicleBuilder.builder()
			.withId(this.generateId())
			.withCombustivel(vehicle.combustivel)
			.withImagem(vehicle.imagem)
			.withMarca(vehicle.marca)
			.withModelo(vehicle.modelo)
			.withPlaca(vehicle.placa)
			.withValor(vehicle.valor)
			.build()
	}

	public generateId() : number
	{
		return this.vehicles.reduce((maxId, vehicle)=>{
			return Math.max(vehicle.id, maxId)
		}, -1) + 1
	}

}