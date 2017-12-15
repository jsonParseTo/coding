/*
* return a integer
* include start, exclude end
*/ 
var random = function ( start, end ) {
    var res = end - start + 1;
    return Math.floor( Math.random()*res ) + start;
}
/*
 * return a random string
 */
var randomString = function ( num ) {
    let result = "",
        str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        len = str.length - 1;
    while( num-- ){
        result += str[random( 0, len )];
    }
    return result;
};