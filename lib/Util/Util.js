/* jshint undef : true */
'use strict';
/**
* Util class
*/
/*global  module, require */
var _ = require('underscore');

var Util = function(){
    
};

/**
*
*/
Util.prototype.arraysDifference = function(array1, array2) {
    var diff = [];
    return diff;
};

/**
*
*/
Util.prototype.effect = function(premier, deuxieme) {
    if (premier > deuxieme) {
        return 'decrease';
    } else if (premier < deuxieme) {
        return 'increase';
    } else {
        return 'egal';
    }
};

/**
*
*/
Util.prototype.CreateCharacter = function(character, c) {
    _.each(c.Attributes, function(element){character.defineProperty(element.Name, true, true, element)});
    return character;
};


module.exports = Util;