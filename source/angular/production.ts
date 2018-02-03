import '../polyfills.ts'
import { platformBrowserDynamic } 	from '@angular/platform-browser-dynamic'
import { AppModule } 				from '../modules/app/app.module'
import {enableProdMode} 			from '@angular/core'

enableProdMode()
platformBrowserDynamic().bootstrapModule(AppModule)