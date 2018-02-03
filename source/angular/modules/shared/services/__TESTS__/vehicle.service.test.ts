import { VehicleService } 						from '../vehicle.service'
import { IVehicle, IVehicleTrackable }			from '../../models'
import { Gol, Fox, Fusca } 						from '../../vehicles'

const http = null
let vehicleService:VehicleService
let vehicles: Array<IVehicleTrackable>

beforeEach(() => {

	vehicleService = new VehicleService(http)
	vehicles = vehicleService.convertArrayToTrackable(new Array<IVehicle>(Gol, Fox, Fusca))
	vehicleService.vehicles = vehicles

})

describe('VehicleService', () => {

	describe('convertArrayToTrackable', () => {

		test('success', () => {

			vehicleService
				.convertArrayToTrackable(new Array<IVehicle>(Gol, Fox, Fusca))
				.map((vehicle:IVehicleTrackable) => expect(vehicle.hasOwnProperty('check')).toBe(true))
		
		})

	})

	describe('search', () => {

		test('success', () => {

			vehicleService.search(Fox.combustivel)
			expect(vehicleService.queryList.length).toEqual(1)
		
		})

	})

	describe('findById', () => {

		test('success', () => {

			const query = vehicleService.findById(Fox.id)
			expect(query).toEqual(Fox)
		
		})

	})

	describe('remove', () => {

		test('success', () => {

			vehicles[0].check = true
			vehicleService.remove()

			expect(vehicleService.vehicles.length).toBe(2)
		
		})

	})

	describe('add', () => {

		test('success', () => {

			vehicleService.add(Fox)
			expect(vehicleService.vehicles.length).toBe(4)
		
		})

	})

	describe('convertToTrackable', () => {

		test('success', () => {

			const newCar = { ...Fox }
			delete newCar['check']
			const trackable = vehicleService.convertToTrackable(newCar)

			expect(trackable).toEqual(Fox)
		
		})

	})

	describe('buildVehicle', () => {

		test('success', () => {

			const vehicle =	vehicleService.convertToTrackable(vehicleService.buildVehicle(Fox))
			vehicle.id = Fox.id

			expect(vehicle).toEqual(Fox)
		
		})

	})

	describe('generateId', () => {

		test('success', () => {

			const random = vehicleService.generateId()
			expect(typeof random).toBe('number')
		
		})

	})

})

