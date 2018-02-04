import { TimelineMax, Animation } 	from 'gsap'
import * as Animations 				from '../../animations'

export namespace CALoaderAnimations
{
	export interface IAnimationElements
	{
		element: HTMLElement
		circle: HTMLElement
		left: HTMLElement
		right: HTMLElement
		textLeft: HTMLElement
		textRight: HTMLElement
	}

	export class AnimationElements implements IAnimationElements
	{
		public element: HTMLElement
		public circle: HTMLElement
		public left: HTMLElement
		public right: HTMLElement
		public textLeft: HTMLElement
		public textRight: HTMLElement

		constructor(
			element: HTMLElement,
			circle: HTMLElement,
			left: HTMLElement,
			right: HTMLElement,
			textLeft: HTMLElement,
			textRight: HTMLElement,
		)
		{
			this.element = element
			this.circle = circle
			this.left = left
			this.right = right
			this.textLeft = textLeft
			this.textRight = textRight
		}
	}

	export const TIMER = 4250

	export function enter(elements:IAnimationElements) : TimelineMax
	{
		const tl = new TimelineMax()
		tl.set(elements.element, { display: 'flex' })
		tl.add(new Array<Animation>(
			Animations.SizeAnimations.size(elements.circle, 0, 20, 1.5).delay(.5),
			Animations.LeafAnimations.wind(elements.left, elements.right),
			Animations.FadeAnimations.fadeUp(elements.textLeft, 0, 0, 1).delay(3.25),
			Animations.FadeAnimations.fadeUp(elements.textRight, 0, 0, 1).delay(3.25)
		))
		return tl
	}

	export function leave(element: HTMLElement) : TimelineMax
	{
		const tl = new TimelineMax()
		tl.to(element, 1, { display:'none', opacity: 0 })
		return tl
	}
}