import { 
	Application,
	Request as req, 
	Response as res,
	NextFunction as next
} 										from 'express'
import chalk 							from 'chalk'
import * as path 						from 'path'
import * as express 					from 'express'
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

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, '../../../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* ==========================================================================
	-- Routes
========================================================================== */

app.use(routes)

/* ==========================================================================
	-- Server
========================================================================== */

app.listen(port, (err:any) => {
	if(err) return console.log(err)
	log(success(`ts-node listening on port ${GLOBAL.PORT} in ${environment} mode`))
})