'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Ragot = function() {
   var ragot = {};
   ragot.__proto__ = BaseCapacity();
 
   ragot.depend = "SOC";

   ragot.test = function(character, modifier) {
       if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.depend]);
   };

   return ragot;
}; 


module.exports = Ragot;