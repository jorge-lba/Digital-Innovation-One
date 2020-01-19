const fs = require( 'fs' )
const { join } = require( 'path' )

const filePath = join( __dirname.replace( 'routes', 'dataBase' ), 'users.json' )

const getUsers = ( ) => {
    const data = fs.existsSync( filePath )
        ? fs.readFileSync( filePath )
        : [ ]

    try {
        return JSON.parse( data )
    } catch (error) {
        return [ { error: 'Usuario não esta cadastrado' } ]
    } 
}

const saveUser = ( users ) => fs.writeFileSync( filePath, JSON.stringify( users, null, '\t' ) )

const userRoutes = ( app ) => {
    app.route( '/users/:id?' )
        .get( ( req, res ) => {
            const users = getUsers()
            res.send( { users } )
        } )
    
}

module.exports = userRoutes
