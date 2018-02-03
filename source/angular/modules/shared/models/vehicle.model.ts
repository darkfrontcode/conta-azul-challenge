import { IVehicle } from './vehicle.interface'

export class Vehicle implements IVehicle
{
	public id: number
	public combustivel: string
	public imagem: string | null
	public marca: string
	public modelo: string
	public placa: string
	public valor: number
}