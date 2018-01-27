import { IVehicle } from '../models/vehicle.interface'
import { Gol } from './gol'
import { Fox } from './fox'
import { Fusca } from './fusca'

const vehicleRegistered = new Array<IVehicle>(Gol, Fox, Fusca)

export const VehicleList = Array.from(new Array(30)).reduce((all:Array<IVehicle>, item:IVehicle, index:number) => {
	all.push({ ...vehicleRegistered[Math.floor((Math.random() * vehicleRegistered.length))], id: (index + 1) })
	return all
}, new Array<IVehicle>())