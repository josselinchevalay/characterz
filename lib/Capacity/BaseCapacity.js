'use strict';
/**
* Capacity class
*/
var utils           = require('../Util/Util.js')

var BaseCapacity = function(){
    BaseCapacity.depend = "";

    BaseCapacity.test = function(character, modifier) {
       if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.depend]);
   }
};

module.exports = BaseCapacity;
