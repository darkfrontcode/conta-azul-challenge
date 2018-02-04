import '../utils/polyfills.ts'
import { platformBrowserDynamic } 	from '@angular/platform-browser-dynamic'
import { enableProdMode } 			from '@angular/core'
import { AppModule } 				from '../modules/app/app.module'

enableProdMode()
platformBrowserDynamic().bootstrapModule(AppModule)