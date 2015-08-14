'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Esquive = function() {
   var esquive = {};
   esquive.__proto__ = BaseCapacity();
 
   esquive.depend = "AG";

   return esquive;
}; 


module.exports = Esquive;