function isPrime( num ) {
    for ( let divisor= 2; divisor <= Math.sqrt( num ); divisor++ ){
        if ( num % divisor === 0 ) {
            return false;
        }
    }
    return true;
}

export default function getPrimes( max ){
    let list = [];
    for ( let num = 2; num < max; num++ ) {

        if ( isPrime( num ) ) {
            list.push( num );
        }
    }
    return list;
}
