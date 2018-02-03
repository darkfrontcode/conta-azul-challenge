import { TimelineMax, Expo } from "gsap"


export namespace LeafAnimations
{

	export const MorphSVGPlugin = window['MorphSVGPlugin']

	export interface IWindPath
	{
		left: Array<string>
		right: Array<string>
	}
	
	export class WindPath implements IWindPath
	{
		public left: Array<string>
		public right: Array<string>
	
		constructor(left:Array<string>, right:Array<string>)
		{
			this.left = left
			this.right = right
		}
	}
	
	export interface IWindMorphPath
	{
		left: Array<any>
		right: Array<any>
	}
	
	export class WindMorphPath implements IWindMorphPath
	{
		public left: Array<any>
		public right: Array<any>
	
		constructor(left:Array<any>, right:Array<any>)
		{
			this.left = left
			this.right = right
		}
	}
	
	export const windPath = new WindPath(
		new Array<string>(
			'm 1025.552,-158.20554 c 0,0 -432.43791,487.20877 -537.54884,99.806892',
			'm 488.00316,-58.398648 c 0,0 -0.033,276.737478 313.00313,276.737478'
		),
		new Array<string>(
			'm 498.77363,322.4767 c 0,0 432.43787,487.20878 537.54877,99.80689',
			'm 1036.3224,422.28359 c 0,0 0.033,276.73748 -313.00307,276.73748'
		)
	)
	
	export const WindMorphPaths = new WindMorphPath(
		new Array<any>(
			MorphSVGPlugin.pathDataToBezier(windPath.left[0], { align: 'relative', offsetY: -370, offsetX: 225 }),
			MorphSVGPlugin.pathDataToBezier(windPath.left[1], { align: 'relative', offsetY: 0, offsetX: 0 })
		),
		new Array<any>(
			MorphSVGPlugin.pathDataToBezier(windPath.right[0], { align: 'relative', offsetY: -370, offsetX: -225 }),
			MorphSVGPlugin.pathDataToBezier(windPath.right[1], { align: 'relative', offsetY: 0, offsetX: 0 })
		)
	)
	
	export function Left(element:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(element, { rotation: 0, scale: 2, opacity: 0 })
		tl.to(element, 2, { ease: Expo.easeInOut, bezier:{ values: WindMorphPaths.left[0], type:"cubic" }})
		tl.to(element, .5, { opacity: 1 }, "-=1.5")
		tl.to(element, .5, { scale:1 }, "-=1")
		tl.to(element, .5, { rotation:90 }, "-=.95")
		tl.to(element, 2, { ease: Expo.easeInOut, bezier:{ values: WindMorphPaths.left[1], type:"cubic" }}, "-=.25")
		tl.to(element, .5, { rotation:0 }, "-=1.05")
		return tl
	}
	
	export function Right(element:HTMLElement)
	{
		const tl = new TimelineMax()
		tl.set(element, { rotation: 0, scale: 2, opacity: 0 })
		tl.to(element, 2, { ease: Expo.easeInOut, bezier:{ values: WindMorphPaths.right[0], type:"cubic" }})
		tl.to(element, .5, { opacity: 1 }, "-=1.5")
		tl.to(element, .5, { scale:1 }, "-=1")
		tl.to(element, .5, { rotation:90 }, "-=.95")
		tl.to(element, 2, { ease: Expo.easeInOut, bezier:{ values: WindMorphPaths.right[1], type:"cubic" }}, "-=.25")
		tl.to(element, .5, { rotation:0 }, "-=1.05")
		return tl
	}
	
	export function wind(right:HTMLElement, left:HTMLElement) : TimelineMax
	{
		const tl = new TimelineMax()
		tl.add(Left(right), Right(left))
		return tl
	}

}