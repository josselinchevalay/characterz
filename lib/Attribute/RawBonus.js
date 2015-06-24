'use strict';

var BaseAttribute = require('./BaseAttribute.js')

var RawBonus = function(value, multiplier){
    var rawBonus = {};
    value       = value || 0;
    multiplier  = multiplier || 0;
    rawBonus.__proto__ = new BaseAttribute(value, multiplier);

    return rawBonus;
}

 

module.exports = RawBonus;