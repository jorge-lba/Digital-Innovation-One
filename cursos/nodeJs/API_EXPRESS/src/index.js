const express = require( 'express' )
const bodyParser = require( 'body-parser' )

const userRoutes = require( './routes/userRoutes' ) 

const port = 3000
const app = express()

app.use( bodyParser.urlencoded( { extended: false } ) )

userRoutes( app )

app.get( '/', ( req, res ) => {
    res.send( "Hello Word!" )
} )

app.listen( port, () => console.log( `Express rodando na porta ${ port }` ) )