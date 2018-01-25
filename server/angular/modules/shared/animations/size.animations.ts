import { TimelineMax, Expo } from 'gsap'

export namespace SizeAnimations
{
	export function size(element:HTMLElement, start:number, end:number, time:number) : TimelineMax
	{
		const tl = new TimelineMax()
		tl.set(element, { scale: start })
		tl.to(element, time, { ease: Expo.easeOut, scale: end })
		return tl
	}
}