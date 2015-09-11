/*global require, module*/
'use strict';

var BaseCapacity    = require('./BaseCapacity.js');

var Charism = function() {
  var charism = {};
  charism.__proto__ = new BaseCapacity();
  
  charism.depend = 'SOC';

  return charism;
}; 


module.exports = Charism;