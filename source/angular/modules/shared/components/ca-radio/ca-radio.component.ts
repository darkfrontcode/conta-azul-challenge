import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core'

@Component({
	selector: 'ca-radio',
	templateUrl: './ca-radio.template.pug',
	styleUrls: ['./ca-radio.style.styl'],
})
export class CARadioComponent
{

	@HostBinding('class.active')
	@Input()
	public active: boolean

	@Input()
	public value: string

	@Input()
	public radiogroup: string

	@Input()
	public id: string

	@Output()
	public state = new EventEmitter<string>()
	
	public onChange(value:string)
	{
		this.state.emit(value)
	}

}