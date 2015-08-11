'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Charism = function() {
   var charism = {};
   charism.__proto__ = BaseCapacity();
 
   charism.depend = "SOC";

   charism.test = function(character, modifier) {
       if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.depend]);
   };

   return charism;
}; 


module.exports = Charism;