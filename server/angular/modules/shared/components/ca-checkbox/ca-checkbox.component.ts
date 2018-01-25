import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core'

@Component({
	selector: 'ca-checkbox',
	templateUrl: './ca-checkbox.template.pug',
	styleUrls: ['./ca-checkbox.style.styl'],
})
export class CACheckboxComponent
{
	
	@Input()
	@HostBinding('class.active')
	public state = false

	@Output()
	public stateChange = new EventEmitter<boolean>()
	
	public onChange()
	{
		this.state = !this.state
		this.stateChange.emit(this.state)
	}

}