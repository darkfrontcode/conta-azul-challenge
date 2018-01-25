import '../polyfills.ts'
import { platformBrowserDynamic } 	from '@angular/platform-browser-dynamic'
import { AppModule } 				from '../modules/app/app.module'

// bootstraps app
export const main = () => platformBrowserDynamic().bootstrapModule(AppModule)

// angular 2 hrm verification
if(document.readyState === 'complete') main()
else document.addEventListener('DOMContentLoaded', main)

// angular 2 hrm ( Hot Reload module )
if(module['hot']) module['hot'].accept()