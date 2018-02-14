export function filterNames( names, startsWith ){
    return names.filter( ( name ) => {
        return name.startsWith( startsWith );
    });
}

export function objectFilter( objects, key, searchString ){
    return objects.filter( ( object ) => {
        return object [ key ] === searchString;
    });
}

export function compoundObjectFilter( objects, keysString, searchString ){
    return objects.filter( ( object ) => {
        keysString.split( '.' ).forEach( ( key ) => {
            object = object[ key ];
        });
        return object === searchString;
    });
}
