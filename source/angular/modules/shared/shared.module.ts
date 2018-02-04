// modules
import { NgModule } 					from '@angular/core'
import { RouterModule }  				from '@angular/router'
import { CommonModule } 				from '@angular/common'
import { HttpModule }					from '@angular/http'
import { FormsModule } 					from '@angular/forms'

// services
import { ValidationsService }			from './services/validations.service'
import { VehicleUtilityService }		from './services/vehicle-utility.service'
import { CAImagePreviewService }		from './components/ca-image-preview/ca-image-preview.service'
import { CALoaderService }				from './components/ca-loader/ca-loader.service'

// components
import { CAHeaderComponent } 			from './components/ca-header/ca-header.component'
import { CASearchBarComponent } 		from './components/ca-search-bar/ca-search-bar.component'
import { CATableComponent } 			from './components/ca-table/ca-table.component'
import { CACheckboxComponent } 			from './components/ca-checkbox/ca-checkbox.component'
import { CARadioComponent } 			from './components/ca-radio/ca-radio.component'
import { CAImagePreviewComponent } 		from './components/ca-image-preview/ca-image-preview.component'
import { CAInputComponent } 			from './components/ca-input/ca-input.component'
import { CAMessageComponent } 			from './components/ca-message/ca-message.component'
import { CAPaginationComponent } 		from './components/ca-pagination/ca-pagination.component'
import { CALoaderComponent } 			from './components/ca-loader/ca-loader.component'

@NgModule({
	imports: [

		RouterModule,
		CommonModule,
		HttpModule,
		FormsModule,

	],
	providers: [

		ValidationsService,
		VehicleUtilityService,
		CAImagePreviewService,
		CALoaderService

	],
	declarations: [ 

		CAHeaderComponent,
		CASearchBarComponent,
		CATableComponent,
		CACheckboxComponent,
		CAImagePreviewComponent,
		CARadioComponent,
		CAInputComponent,
		CAMessageComponent,
		CAPaginationComponent,
		CALoaderComponent
		
	],
	exports: [

		// modules
		CommonModule,
		HttpModule,
		FormsModule,

		// components
		CAHeaderComponent,
		CASearchBarComponent,
		CATableComponent,
		CACheckboxComponent,
		CAImagePreviewComponent,
		CARadioComponent,
		CAInputComponent,
		CAMessageComponent,
		CAPaginationComponent,
		CALoaderComponent
		
	]
})
export class SharedModule { }