import { Injectable }									from '@angular/core'
import { IVehicle, IVehicleTrackable, VehicleBuilder } 	from '../models'

@Injectable()
export class VehicleUtilityService
{
	public convertArrayToTrackable(vehicles: Array<IVehicle>) : Array<IVehicleTrackable>
	{
		return <Array<IVehicleTrackable>>vehicles.map(vehicle => this.convertToTrackable(vehicle))
	}

	public convertToTrackable(vehicle:IVehicle) : IVehicleTrackable
	{
		const trackable = <IVehicleTrackable>vehicle
		trackable.check = false
		return trackable
	}

	public generateId(arr: Array<IVehicleTrackable>) : number
	{
		return arr.reduce((maxId, vehicle) => {
			return Math.max(vehicle.id, maxId)
		}, -1) + 1
	}

	public reduceToId(vehicles: Array<IVehicleTrackable>) : Array<{[key:string]:number}>
	{
		return vehicles.reduce((all, item) => {
			if(item.check) all.push({id: item.id})
			return all
		}, new Array<{[key:string]:number}>())
	}

	public buildVehicle(vehicle:IVehicle, vehicles: Array<IVehicleTrackable>) : IVehicle
	{
		return VehicleBuilder.builder()
			.withId(this.generateId(vehicles))
			.withCombustivel(vehicle.combustivel)
			.withImagem(vehicle.imagem)
			.withMarca(vehicle.marca)
			.withModelo(vehicle.modelo)
			.withPlaca(vehicle.placa)
			.withValor(vehicle.valor)
			.build()
	}
}