import { VehicleBuilder } from '../builders'

export const Fusca = VehicleBuilder.builder()
	.withId(3)
	.withCombustivel("Alcool")
	.withImagem("http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg")
	.withMarca("Volkswagen")
	.withModelo("Fusca")
	.withPlaca("PAI-4121")
	.withValor(20000)
	.build()