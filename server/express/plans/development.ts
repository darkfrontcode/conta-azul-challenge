import { 
	Application,
	Request as req, 
	Response as res,
	NextFunction as next
} 										from 'express'
import chalk 							from 'chalk'
import webpack_config 					from '../../webpack/development'
import * as path 						from 'path'
import * as express 					from 'express'
import * as webpack 					from 'webpack'
import * as webpack_dev_middleware 		from 'webpack-dev-middleware'
import * as webpack_hot_middleware 		from 'webpack-hot-middleware'
import * as bodyParser 					from 'body-parser'
import { GLOBAL } 						from '../global'
import routes 							from '../routes'


/* ==========================================================================
	-- Utils
========================================================================== */


const port 				= process.env.PORT || GLOBAL.PORT
const environment 		= process.env.NODE_ENV || GLOBAL.DEVELOPMENT
const log 				= console.log
const success 			= chalk.green


/* ==========================================================================
	-- Configs
========================================================================== */


const app : Application = express()
const webpack_compiler 	= webpack(webpack_config)

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../../../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


/* ==========================================================================
	-- Webpack Middleware
========================================================================== */


app.use(webpack_dev_middleware(webpack_compiler, <any>{
	publicPath: webpack_config.output.publicPath,
	reload: true,
	stats: { colors: true }
}))

app.use(webpack_hot_middleware(webpack_compiler, <any>{
	log: console.log
}))

/* ==========================================================================
	-- Routes
========================================================================== */

app.use((req:req, res:res, next:next) => {
	setTimeout(next, Math.floor((Math.random() * 2000) + 100 ))
})
app.use(routes)

/* ==========================================================================
	-- Server
========================================================================== */

app.listen(port, (err:any) => {
	if(err) return console.log(err)
	log(success(`ts-node listening on port ${GLOBAL.PORT} in ${environment} mode`))
})