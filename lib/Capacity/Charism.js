'use strict';

var BaseCapacity    = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Charism = function() {
  var charism = {};
  charism.__proto__ = new BaseCapacity();
  
  charism.depend = "SOC";

  return charism;
}; 


module.exports = Charism;