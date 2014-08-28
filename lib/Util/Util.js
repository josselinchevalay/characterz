/**
* Util class
*/
var _ = require("underscore");

var Util = function(){
    
};

Util.prototype.arraysDifference = function(array1, array2) {
    var diff = [];
    return diff;
};

Util.prototype.effect = function(premier, deuxieme) {
    if (premier > deuxieme) {
        return "decrease";
    } else if (premier < deuxieme) {
        return "increase";
    } else {
        return "egal";
    }
};


module.exports = Util;