import { TestBed, inject } from '@angular/core/testing'
import {
	HttpModule,
	Response,
	ResponseOptions,
	XHRBackend
} 									from '@angular/http'
import { MockBackend } 				from '@angular/http/testing'
import { VehicleService } 			from '../vehicle.service'
import { VehicleList } 				from '../../vehicles'
import { VehicleUtilityService }	from '../vehicle-utility.service'
import 'rxjs/add/operator/map'

describe('VehicleService', () => {

	beforeEach(() => {

		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				VehicleUtilityService,
				VehicleService,
				{ provide: XHRBackend, useClass: MockBackend },
			]
		})

	})

	describe('requestVehicles', () => {

		test('should return an Observable<Array<IVehicleTrackable>>', 
		
			inject([VehicleService, XHRBackend], (VehicleService, mockBackend) => {

				mockBackend.connections.subscribe((connection) => {
					connection.mockRespond(new Response(new ResponseOptions({
						body: JSON.stringify(VehicleList)
					})))
				})

				VehicleService.requestVehicles().subscribe((vehicles) => expect(vehicles.length).toBe(30))

			})
		)

	})

})