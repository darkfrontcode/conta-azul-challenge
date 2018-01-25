import { NgModule }						from '@angular/core'
import { BrowserModule } 				from '@angular/platform-browser'
import { BrowserAnimationsModule }		from '@angular/platform-browser/animations'

// modules
import { AppRouterModule }				from './app.router.module'
import { SharedModule } 				from '../shared/shared.module'
import { DashboardModule } 				from '../dashboard/dashboard.module'

// services
import { VehicleService } 				from '../shared/services/vehicle.service'
import { CALoaderService } 				from '../shared/components/ca-loader/ca-loader.service'

// components
import { AppComponent } 				from './components/app/app.component'

@NgModule({
	imports: [
		
		BrowserModule,
		BrowserAnimationsModule,
		SharedModule,
		AppRouterModule,
		DashboardModule

	],
	providers: [

		VehicleService,
		CALoaderService
		
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
