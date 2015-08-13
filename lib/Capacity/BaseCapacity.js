'use strict';
/**
* Capacity class
*/
var utils           = require('../Util/Util.js')

var BaseCapacity = function(){
    var baseCapcity = {};

    baseCapcity.depend = "";
    
    baseCapcity.test = function(character, modifier) {
        if(modifier == null){
           modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       return utils.isSuccess(alea, character[this.depend]);
    };

    return baseCapcity;
}

module.exports = BaseCapacity;
