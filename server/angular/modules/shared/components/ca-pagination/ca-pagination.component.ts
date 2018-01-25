import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'ca-pagination',
	templateUrl: './ca-pagination.template.pug',
	styleUrls: ['./ca-pagination.style.styl'],
})
export class CAPaginationComponent
{

	@Input()
	public offset: number

	@Input()
	public start: number

	@Input()
	public end: number

	@Input()
	public max: number

	@Output()
	public startChange = new EventEmitter<number>()

	@Output()
	public endChange = new EventEmitter<number>()
	
	public increase() : void
	{
		if(this.notlast())
		{
			this.start+=this.offset
			this.end+=this.offset
			this.update()
		}
	}

	public decrease() : void
	{
		if(this.notFirst())
		{
			this.start-=this.offset
			this.end-=this.offset
			this.update()
		}
	}

	public goTo(index: number)
	{
		this.start = ((index - 1) * this.offset)
		this.end = (index * this.offset)
		this.update()
	}

	public update()
	{
		this.startChange.emit(this.start)
		this.endChange.emit(this.end)
	}

	public isActive(index:number) : string
	{
		return Math.ceil(this.end/this.offset) == index ? 'active' : ''
	}

	public leftIsDisabled() : string
	{
		return this.first() ? 'disabled' : ''
	}

	public rightIsDisabled() : string
	{
		return this.last() ? 'disabled' : ''
	}

	public notFirst() : boolean
	{
		return this.start>=this.offset
	}

	public notlast() : boolean
	{
		return this.end<this.max
	}

	public first() : boolean
	{
		return !this.notFirst()
	}

	public last() : boolean
	{
		return !this.notlast()
	}

	public bulletsNumber() : number
	{
		return Math.ceil(this.max/this.offset)
	}
	
}
