import { ValidationsService } from '../validations.service'

let validations, 
	validationsService

describe('ValidationsService', () => {

	describe('valid', () => {

		test('success', () => {

			validationsService = new ValidationsService()
			validations = new Array<boolean>(true, true)
		
			expect(validationsService.valid(validations)).toEqual('valid')
		
		})
		
		test('fail', () => {
		
			validationsService = new ValidationsService()
			validations = new Array<boolean>(true, false)
		
			expect(validationsService.valid(validations)).toBeNull
		
		})
		

	})


	describe('invalid', () => {

		test('success', () => {
	
			validationsService = new ValidationsService()
			validations = new Array<boolean>(true, true)
		
			expect(validationsService.invalid(validations)).toEqual('invalid')
		
		})
		
		test('fail', () => {
		
			validationsService = new ValidationsService()
			validations = new Array<boolean>(true, false)
		
			expect(validationsService.invalid(validations)).toBeNull
		
		})

	})

})