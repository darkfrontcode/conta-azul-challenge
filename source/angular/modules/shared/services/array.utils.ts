export class ArrayUtils
{

	public static merge<T>(arr: Array<Array<T>>) : Array<T>
	{
		return arr.reduce((all:Array<any>, item:any, index:number) => {
			all.push(...item)
			return all
		}, new Array<T>())
	}

	public static unique<T>(arr: Array<T>) : Array<T>
	{
		return new Array<T>(...new Set(arr))
	}

	public static changeProps<T, E>(arr: Array<T>, prop:string, state: E) : Array<T>
	{
		return arr.map((item:T) => {
			item[prop] = state
			return item
		})
	}

	public static sliceTrack<T>(arr:Array<T>, start:number, end:number) : Array<T>
	{
		return arr.slice(start, end)
	}

	public static sliceSome<T, E>(arr:Array<T>, start:number, end:number, prop:string, state:E) : boolean
	{
		return this.sliceTrack(arr, start, end).some((item:T) => item[prop] == state)
	}

}