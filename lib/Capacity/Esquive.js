/*global require, module*/
'use strict';

var BaseCapacity   = require('./BaseCapacity.js');

var Esquive = function() {
   var esquive = {};
   esquive.__proto__ = BaseCapacity();
 
   esquive.depend = 'AG';

   return esquive;
}; 


module.exports = Esquive;