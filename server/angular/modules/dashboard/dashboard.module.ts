import { NgModule }								from '@angular/core'
import { RouterModule }  						from '@angular/router'
import { FormsModule, ReactiveFormsModule }		from '@angular/forms'
import { DashboardRoutes } 						from './dashboard.routes'

// modules
import { SharedModule } 						from '../shared/shared.module'

// component
import { DashboardComponent }					from './components/dashboard/dashboard.component'
import { CreateComponent }						from './components/create/create.component'

@NgModule({
	imports: [
		RouterModule.forChild(DashboardRoutes),
		SharedModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [ 
		DashboardComponent,
		CreateComponent
	]
})
export class DashboardModule { }