'use strict';

var BaseCapacity   = require('./BaseCapacity.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')


var Commerage = function() {
   var commerage = {};
   commerage.__proto__ = BaseCapacity();
 
   commerage.depend = "SOC";

   commerage.test = function(character, modifier) {
       if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.depend]);
   };

   return commerage;
}; 


module.exports = Commerage;