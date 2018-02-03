import { 
	Component, 
	ViewEncapsulation, 
	OnInit, 
	AfterViewInit 
} 									from '@angular/core'
import { VehicleService } 			from '../../../shared/services/vehicle.service'
import { CALoaderService }			from '../../../shared/components/ca-loader/ca-loader.service'
import { Observable } 				from 'rxjs/Observable'
import { CALoaderAnimations }		from '../../../shared/components/ca-loader/ca-loader.animations'

@Component({
	selector: 'app',
	templateUrl: './app.template.pug',
	styleUrls: ['./app.style.styl'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit
{
	private _timer: Observable<number>

	public loader: boolean
	public DOMReady: boolean

	constructor(
		private loaderService: CALoaderService,
		private vehicleService: VehicleService
	)
	{

	}

	ngOnInit()
	{
		const { state$, DOMReady$ } = this.loaderService

		state$.subscribe(state => (this.loader = state))
		DOMReady$.subscribe(state => (this.DOMReady = state))

	}

	ngAfterViewInit(): void
	{
		this.loaderService.state = true
		this._timer = Observable.timer(CALoaderAnimations.TIMER)

		Observable
			.forkJoin(new Array<Observable<any>>(
				this.vehicleService.requestVehicles(),
				this._timer
			))
			.subscribe(res => {

				console.log('done')

				this.loaderService.state = false
				this.loaderService.DOMReady = true
				this.vehicleService.vehicles = res.shift()

			})
	}

}