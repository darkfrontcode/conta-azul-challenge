import { 
	Component, 
	Input, 
	ElementRef, 
	ViewChild, 
	OnChanges, 
	SimpleChanges }						from '@angular/core'
import { FluidAnimations }				from '../../animations/fluid.animation'
import { CAImagePreviewService }		from './ca-image-preview.service'

@Component({
	selector: 'ca-image-preview',
	templateUrl: './ca-image-preview.template.pug',
	styleUrls: ['./ca-image-preview.style.styl'],
})
export class CAImagePreviewComponent implements OnChanges
{
	@Input()
	public state:boolean

	@ViewChild('content')
	public content:ElementRef

	constructor(
		private imagePreviewService: CAImagePreviewService, 
		private element:ElementRef
	)
	{

	}

	ngOnChanges(changes: SimpleChanges)
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

	get image()
	{
		return this.imagePreviewService.image
	}

	public close() : void
	{
		this.imagePreviewService.close()
	}

}