import { VehicleBuilder } from '../builders'

export const Gol = VehicleBuilder.builder()
	.withId(1)
	.withCombustivel("Flex")
	.withImagem(null)
	.withMarca("Volkswagen")
	.withModelo("Gol")
	.withPlaca("FFF-5498")
	.withValor(20000)
	.build()