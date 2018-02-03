import 'jest'
import { ArrayUtils } 		from './array.utils'
import { IVehicle }			from '../models'
import { Gol, Fox, Fusca } 	from '../vehicles'

let vehicles: Array<IVehicle>
let vehicleGroup: Array<Array<IVehicle>>

beforeEach(() => {

	vehicles = new Array<IVehicle>(Gol, Fox, Fusca)
	vehicleGroup = new Array<Array<IVehicle>>(vehicles, vehicles)

})

describe('ArrayUtils', () => {

	describe('merge', () => {

		test('success', () => {

			expect(ArrayUtils.merge(vehicleGroup).length).toBe(6)

		})

	})

	describe('unique', () => {

		test('success', () => {

			const arr = ArrayUtils.merge(vehicleGroup)
			expect(ArrayUtils.unique(arr).length).toBe(3)

		})

	})

	describe('changeProps', () => {

		test('success', () => {

			ArrayUtils.changeProps(vehicles, 'placa', 'xxx')
			vehicles.map((vehicle:IVehicle) => expect(vehicle.placa).toMatch(/xxx/))
			
		})

	})

	describe('sliceTrack', () => {

		test('success', () => {

			const track = ArrayUtils.sliceTrack(vehicles, 0, 2)
			expect(track.length).toBe(2)

		})

	})

	describe('sliceSome', () => {

		test('success', () => {

			const all = ArrayUtils.sliceSome(vehicles, 0, 3, 'marca', 'Volkswagen')
			expect(all).toBeTruthy()

		})

	})

})