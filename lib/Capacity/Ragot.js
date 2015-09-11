/* global require, module */
'use strict';

var BaseCapacity   = require('./BaseCapacity.js');


var Ragot = function() {
   var ragot = {};
   ragot.__proto__ = BaseCapacity();
 
   ragot.depend = 'SOC';
   
   return ragot;
}; 


module.exports = Ragot;