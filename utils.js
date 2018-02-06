var addEvent = (function() {
    if (window.addEventListener) {
        return function(el, type, fn, capture) {  
            el.addEventListener(type, function(e) {
                fn.call(el, e);
            }, capture);
        }
    } else if (window.attachEvent) {
        return function(el, type, fn, capture) {
            el.attachEvent("on"+type, function(e) {
                fn.call(el, e);
            })
        }
    }
}());
/*
 * return a random integer
 * include start, include end
 */ 
var random = function (start, end) {
    var res = end - start + 1;
    return Math.floor( Math.random()*res ) + start;
}
/*
 * return a random string
 * the length depending on  your argument
 */
var randomString = function (num) {
    var result = "",
        str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        len = str.length - 1;
    while(num--) {
        result += str.charAt(random( 0, len ));
    }
    return result;
};
/*
 * return an array
 * the length depending on  your argument
 */
function currentToFutureDate(n) {
    var date = +new Date();
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(new Date(date+8.64e7*i).toLocaleDateString())
    }
    return result;
}
/*
 * deep clone
 */
function deepClone (obj) {
    var dist;
    if( typeof obj !== "object" || obj === null){
        return obj;
    }else if(Object.prototype.toString.call(obj) === "[object Object]"){
        dist = {};
        for (var i in obj) {
            dist[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }else if(Object.prototype.toString.call(obj) === "[object Array]"){
        dist = [];
        for (var i = 0, len = obj.length; i < len; i++ ) {
            dist[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
        }
    }else{
        dist = obj;
    }            
    return dist;
}