/*global require, module*/
'use strict';

var BaseCapacity   = require('./BaseCapacity.js');



var Commerage = function() {
   var commerage = {};
   commerage.__proto__ = BaseCapacity();
 
   commerage.depend = 'SOC';
   
   return commerage;
}; 


module.exports = Commerage;