import { 
	Component, 
	Input, 
	SimpleChanges, 
	OnChanges, 
	ElementRef, 
	ViewChild, 
	Output, 
	EventEmitter 
} 													from '@angular/core'
import { FormBuilder, FormGroup, Validators } 		from '@angular/forms'
import { FluidAnimations } 							from '../../../shared/animations/fluid.animation'
import { VehicleService } 							from '../../../shared/services/vehicle.service'
import { IVehicle }									from '../../../shared/models'
import { ValidationsService } 						from '../../../shared/services/validations.service'

@Component({
	selector: 'create',
	templateUrl: './create.template.pug',
	styleUrls: ['./create.style.styl'],
})
export class CreateComponent implements OnChanges
{
	public form: FormGroup
	public placa:string
	public modelo:string
	public marca: string
	public imagem: string
	public combustivel: string
	public valor: number

	@Input()
	public state: boolean

	@Output()
	public stateChange = new EventEmitter<boolean>()

	@ViewChild('content')
	public content:ElementRef

	constructor(
		private vehicleService: VehicleService,
		private validationsService: ValidationsService,
		private element:ElementRef,
		private fb: FormBuilder
	)
	{
		this.form = this.fb.group({
			'placa': 			[null, Validators.required],
			'modelo': 			[null, Validators.required],
			'marca': 			[null, Validators.required],
			'imagem': 			[null],
			'combustivel': 		[null],
			'valor': 			[null]
		})
	}

	ngOnChanges(changes: SimpleChanges) : void
	{
		const { previousValue:previous, currentValue:current } = changes.state
		const element = this.element.nativeElement
		const content = this.content.nativeElement

		if(current === true && previous === false)
		{
			FluidAnimations.animationEnter(element, content)
		}

		if(previous === true && current === false)
		{
			FluidAnimations.animationLeave(element, content)
		}

	}

	public create(vehicle:IVehicle) : void
	{
		this.vehicleService.add(vehicle)
		this.reset()
		this.close()
	}

	updateCombustivel(value:string)
	{
		this.form.controls['combustivel'].setValue(value)
	}

	public close() : void
	{
		this.state = false
		this.stateChange.emit(this.state)
		this.reset()
	}

	public reset() : void
	{

		new Array<string>(
			"placa", 
			"modelo", 
			"marca", 
			"imagem", 
			"combustivel", 
			"valor"
		).map((key) => this[key] = null)

		this.form.reset()

	}

	public valid(name:string) : string
	{
		return this.validationsService.valid(
			new Array<boolean>(
				this.form.controls[name].dirty,
				this.form.controls[name].valid
			)
		)
	}

	public invalid(name:string) : string
	{
		return this.validationsService.invalid(
			new Array<boolean>(
				this.form.controls[name].dirty,
				this.form.controls[name].invalid
			)
		)
	}
	
}