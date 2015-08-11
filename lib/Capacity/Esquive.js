'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Esquive = function() {
   var esquive = {};
   esquive.__proto__ = BaseCapacity();
 
   esquive.dependant = "AG";

   esquive.test = function(character, modifier) {
       if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.dependant]);
   };

   return esquive;
}; 


module.exports = Esquive;