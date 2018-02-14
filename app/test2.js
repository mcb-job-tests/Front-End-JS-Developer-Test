export function capitalise( names ){
    return names.map( name => name.toUpperCase() );
}

export function extractValue( objects, key ) {
    return objects.map( object => object[ key ] );
}

export function extractCompoundValue( objects, keysString ) {
    return objects.map( object => {
        keysString.split( '.' ).forEach( ( key ) => {
            object = object[ key ];
        });
        return object;
    });
}
