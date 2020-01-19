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
        .post( ( req, res ) => {
            const users = getUsers()

            users.push( req.body )

            saveUser( users )

            res.status(201).send( 'Usuario cadastrado!' )
        } )
        .put( ( req, res ) => {
            const users = getUsers()

            saveUser( users.map( user => {
                if( user.id === req.params.id ){
                    return {
                        ...user,
                        ...req.body
                    }
                } else {
                    return user
                }

            } ) )

            res.status(200).send( 'Usuario foi atualizado' )

        } )
        .delete( ( req, res ) => {
            const users = getUsers()

            saveUser( users.filter( user => user.id !== req.params.id ) )

            res.status(200).send( "Usuario deletado com sucesso" )
        } )
    
}

module.exports = userRoutes
