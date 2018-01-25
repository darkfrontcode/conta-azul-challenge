import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'ca-input',
	templateUrl: './ca-input.template.pug',
	styleUrls: ['./ca-input.style.styl'],
})
export class CAInputComponent
{

	@Input()
	public id: string

	@Input()
	public type: string

	@Input()
	public placeholder: string

	@Input()
	public valid: boolean

	@Input()
	public invalid: boolean

	@Input()
	public content: string

	@Output()
	public contentChange = new EventEmitter<string>()

	public onContentChanged(model:string)
	{
		this.contentChange.emit(model)
	}

}