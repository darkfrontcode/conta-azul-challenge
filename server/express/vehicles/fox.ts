import { VehicleBuilder } from '../builders'

export const Fox = VehicleBuilder.builder()
	.withId(2)
	.withCombustivel("Gasolina")
	.withImagem(null)
	.withMarca("Volkswagem")
	.withModelo("Fox")
	.withPlaca("FOX-4125")
	.withValor(20000)
	.build()