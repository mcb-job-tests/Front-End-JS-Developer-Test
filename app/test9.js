export default function countNodes( root ) {
    return ( root === null || root === undefined ) ? 0 : 1 + countNodes( root.left ) + countNodes( root.right );
}