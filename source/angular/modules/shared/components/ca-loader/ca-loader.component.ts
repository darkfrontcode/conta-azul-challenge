import { 
	Component, 
	Input, 
	ElementRef, 
	ViewChild,  
	OnChanges,
	SimpleChanges
} 										from '@angular/core'
import { CALoaderAnimations }			from './ca-loader.animations'

@Component({
	selector: 'ca-loader',
	templateUrl: './ca-loader.template.pug',
	styleUrls: ['./ca-loader.style.styl'],
})
export class CALoaderComponent implements OnChanges
{
	@Input()
	public state: boolean

	@ViewChild('left')
	public left:ElementRef

	@ViewChild('right')
	public right:ElementRef

	@ViewChild('contaAnimation')
	public contaAnimation:ElementRef

	@ViewChild('azulAnimation')
	public azulAnimation:ElementRef

	@ViewChild('circle')
	public circle:ElementRef

	constructor(private element:ElementRef)
	{
		
	}

	ngOnChanges(changes: SimpleChanges)
	{	
		const { currentValue:current } = changes.state

		if(current)
		{	
			CALoaderAnimations.enter(this.buildAnimationElements()).play()
		}

		if(!current)
		{
			CALoaderAnimations.leave(this.element.nativeElement).play()
		}
		
	}

	public buildAnimationElements() : CALoaderAnimations.AnimationElements
	{
		return new CALoaderAnimations.AnimationElements(
			this.element.nativeElement,
			this.circle.nativeElement,
			this.left.nativeElement,
			this.right.nativeElement,
			this.contaAnimation.nativeElement,
			this.azulAnimation.nativeElement
		)
	}

}