const fs = require( 'fs' )
const { join } = fs

const filePath = join( __dirname.replace( 'routes', 'dataBase' ), 'users.json' )

const getUsers = ( ) => {
    const data = fs.existsSync( filePath )
        ? fs.readFileSync( filePath )
        : [ ]

    try {
        return JSON.parse( data )
    } catch (error) {
        return [ ]
    } 
}

const saveUsers = ( users ) => fs.writeFileSync( filePath, JSON.stringify( users, null, '\t' ) )
