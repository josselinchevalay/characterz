'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Ragot = function() {
   var ragot = {};
   ragot.__proto__ = BaseCapacity();
 
   ragot.depend = "SOC";
   
   return ragot;
}; 


module.exports = Ragot;