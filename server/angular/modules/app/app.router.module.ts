import { NgModule }              			from '@angular/core'
import { RouterModule, Routes, Route }  	from '@angular/router'

const AppRoutes:Routes = new Array<Route>(
	{ 
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full',
	},
	{
		path: 'dashboard',
		children: [
			{
				path: '',
				loadChildren: '../dashboard/dashboard.module#DashboardModule'
			}
		]
	}
)

@NgModule({
	imports: [ RouterModule.forRoot(AppRoutes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRouterModule {}