import { Expo, TimelineMax } from 'gsap'

export namespace FluidAnimations
{
	export function elementEnter(element:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(element, { x: '100%', backgroundColor:'#2687e9' })
		tl.to(element, 1, { ease: Expo.easeOut, x:'0%', backgroundColor:'#073d8d' })
		return tl
	}
	
	export function contentEnter(content:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(content, { x:'100%' })
		tl.to(content, 1, { ease: Expo.easeOut, x:'0%' })
		return tl
	}
	
	export function elementLeave(element:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(element, { x: '0%', backgroundColor:'#073d8d' })
		tl.to(element, .75, { ease: Expo.easeIn, x:'100%', backgroundColor:'#2687e9' })
		return tl
	}
	
	export function contentLeave(content:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(content, { x:'0%' })
		tl.to(content, .75, { ease: Expo.easeIn, x:'100%' })
		return tl
	}
	
	export function animationEnter(element:HTMLElement, content:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.add(elementEnter(element), contentEnter(content).delay(.15))
		tl.play()
	}
	
	export function animationLeave(element:HTMLElement, content:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.add(contentLeave(content), elementLeave(element).delay(.05))
		tl.play()
	}
}