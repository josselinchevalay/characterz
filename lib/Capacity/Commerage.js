'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Commerage = function() {
   var commerage = {};
   commerage.__proto__ = BaseCapacity();
 
   commerage.depend = "SOC";
   
   return commerage;
}; 


module.exports = Commerage;