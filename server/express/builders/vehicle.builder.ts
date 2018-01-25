import { IVehicle, Vehicle } from '../models'

export class VehicleBuilder
{
	private vehicle:IVehicle = new Vehicle()

	public static builder()
	{
		return new VehicleBuilder()
	}

	public build(): IVehicle
	{
		return this.vehicle
	}

	public withId(id: number)
	{
		this.vehicle.id = id
		return this
	}

	public withCombustivel(combustivel: string)
	{
		this.vehicle.combustivel = combustivel
		return this
	}

	public withImagem(imagem: string | null)
	{
		this.vehicle.imagem = imagem
		return this
	}

	public withMarca(marca: string)
	{
		this.vehicle.marca = marca
		return this
	}

	public withModelo(modelo: string)
	{
		this.vehicle.modelo = modelo
		return this
	}

	public withPlaca(placa: string)
	{
		this.vehicle.placa = placa
		return this
	}

	public withValor(valor: number)
	{
		this.vehicle.valor = valor
		return this
	}

}