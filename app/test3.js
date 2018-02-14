export default function test3(numMax){

    let fibSeq = [];
    if ( numMax && numMax > 0 ) {
        fibSeq.push( 0 );
        if ( numMax > 1 ) {
            fibSeq.push( 1 );
            for ( let i = 2; i < numMax; i++ ) {
                fibSeq.push( fibSeq[ i - 1 ] + fibSeq[ i - 2 ] );
            }
        }
    }
    return fibSeq;
}