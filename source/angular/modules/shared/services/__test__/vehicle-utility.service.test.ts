import { VehicleUtilityService } 	from '../vehicle-utility.service'
import { VehicleList, Gol } 		from '../../vehicles'
import { IVehicleTrackable } 		from '../../models'

let utility: VehicleUtilityService
let vehicles: Array<IVehicleTrackable>

beforeEach(() => {
	
	utility = new VehicleUtilityService()
	vehicles = utility.convertArrayToTrackable(VehicleList)

})

describe('VehicleUtilityService', () => {


	describe('convertArrayToTrackable', () => {

		test('should convert an array of IVehicles into an array of IVehicleTrackable', () => {

			utility
				.convertArrayToTrackable(vehicles)
				.map((vehicle:IVehicleTrackable) => expect(vehicle.hasOwnProperty('check')).toBe(true))
		
		})

	})

	describe('convertToTrackable', () => {

		test('should convert a IVehicle into a IVehicleTrackable', () => {

			expect(utility.convertToTrackable(Gol).hasOwnProperty('check')).toBe(true)
		})

	})

	describe('generateId', () => {

		test('should return a new id', () => {
			
			const id = utility.generateId(vehicles)
			expect(typeof id).toBe('number')
			expect(id).toBe(vehicles.length + 1)
		
		})
	
	})


	describe('reduceToId', () => {

		test('should reduce an array of IVehicleTrackable into a list of IVehicles IDs', () => {

			const list = utility.reduceToId(vehicles)
			list.map(vehicle => expect(Object.keys(vehicle).length).toBe(1))

		})

	})

	describe('buildVehicle', () => {

		test('should create a new instance of IVehicle with new and unique ID', () => {

			const vehicle =	utility.convertToTrackable(utility.buildVehicle(Gol, vehicles))
			expect(typeof vehicle.id).toBe('number')
			expect(vehicle.id).toBe(vehicles.length + 1)
		
		})

	})

})