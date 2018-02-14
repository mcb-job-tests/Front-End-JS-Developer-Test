export function groupBy( people, key ) {
    let obj = {};
    let keyArray = [];

    people.forEach( person => {
        if ( !keyArray.includes( person[ key ] ) ){
            keyArray.push( person[ key ] );
        }
    });

    keyArray.forEach( keyString => {
        Reflect.set( obj, keyString, people.filter( person => person[ key ] === keyString ) );
    });

    return obj;
}

export function groupBySex( people ) {
    return groupBy( people, 'sex' );
}

export function groupByYearThenSex(people) {
    let obj = {};
    let groupByYear = groupBy( people, 'born' );

    Object.keys( groupByYear ).forEach( year => {
        Reflect.set( obj, year, groupBySex( groupByYear[ year ] ) );
    });

    return( obj );
}
