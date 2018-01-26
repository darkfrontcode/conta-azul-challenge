import { 
	Component, 
	Input, 
	ElementRef, 
	ViewChild,  
	OnChanges,
	SimpleChanges
} 										from '@angular/core'
import { LeafAnimations } 				from '../../../shared/animations/leaf.animations'
import { SizeAnimations }				from '../../../shared/animations/size.animations'
import { FadeAnimations }				from '../../../shared/animations/fade.animations'
import { TimelineMax, Animation } 		from 'gsap'
import { CALoaderService }				from '../ca-loader/ca-loader.service'

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

	constructor(
		private element:ElementRef,
		private loaderService: CALoaderService
	)
	{
		
	}

	ngOnChanges(changes: SimpleChanges)
	{	

		const { previousValue:previous, currentValue:current, firstChange:first } = changes.state

		if(!first)
		{
			if(!!current && !previous)
			{
				new TimelineMax({ onComplete: this.callback.bind(this) })
					.set(this.element.nativeElement, { display: 'flex' })
					.add(
						new Array<Animation>(
							SizeAnimations.size(this.circle.nativeElement, 0, 20, 1.5).delay(.5),
							LeafAnimations.wind(this.left.nativeElement, this.right.nativeElement),
							FadeAnimations.fadeUp(this.contaAnimation.nativeElement, 0, 0, 1).delay(3.25),
							FadeAnimations.fadeUp(this.azulAnimation.nativeElement, 0, 0, 1).delay(3.25)
						)
					)
					.play()
			}
	
			if(!!previous && !current) 
			{	
				new TimelineMax()
					.to(this.element.nativeElement, 1, { display:'none', opacity: 0 })
					.play()
			}
		}
	}

	private callback()
	{
		this.loaderService.state = false
		this.loaderService.DOMReady = true
	}
}