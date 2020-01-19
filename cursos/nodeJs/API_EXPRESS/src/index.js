const express = require( 'express' )

const userRoutes = require( './routes/userRoutes' ) 

const app = express()
const port = 3000

userRoutes( app )

app.get( '/', ( req, res ) => {
    res.send( "Hello Word!" )
} )

app.listen( port, () => console.log( `Express rodando na porta ${ port }` ) )