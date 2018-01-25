import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
	selector: 'ca-search-bar',
	templateUrl: './ca-search-bar.template.pug',
	styleUrls: ['./ca-search-bar.style.styl'],
})
export class CASearchBarComponent
{
	@Input()
	public search: string

	@Output()
	public searchChange = new EventEmitter<string>()

	public onEnter(value:string) : void
	{
		this.searchChange.emit(value)
	}

}