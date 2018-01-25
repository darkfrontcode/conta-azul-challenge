import { TimelineMax, Expo } from 'gsap'

export namespace FadeAnimations
{
	export function fadeUp(element:HTMLElement, start:number, end:number, time:number) : TimelineMax
	{
		const tl = new TimelineMax()
		tl.set(element, { y: start, opacity: 0 })
		tl.to(element, time, { ease: Expo.easeOut, y: end, opacity: 1 })
		return tl
	}
}