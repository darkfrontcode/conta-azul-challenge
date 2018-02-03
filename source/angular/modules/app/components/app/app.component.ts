import { Component, ViewEncapsulation, OnInit } 	from '@angular/core'
import { CALoaderService }							from '../../../shared/components/ca-loader/ca-loader.service'

@Component({
	selector: 'app',
	templateUrl: './app.template.pug',
	styleUrls: ['./app.style.styl'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit
{
	constructor(private loaderService: CALoaderService)
	{

	}

	ngOnInit()
	{
		setTimeout(() => (this.loaderState = true))
	}

	get loaderState()
	{
		return this.loaderService.state
	}

	set loaderState(state: boolean)
	{
		this.loaderService.state = true
	}

	get DOMReady()
	{
		return this.loaderService.DOMReady
	}
}