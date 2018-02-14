export default function test8(){
    let numArray = Array.from( new Array( 101 ).keys() );
    return -numArray.reduce( ( a, b ) => a - b, 0 );
}
