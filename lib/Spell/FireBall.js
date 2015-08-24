'use strict';

var BaseSpell = require('./BaseSpell.js');
var utils     = require('../Util/Util.js');

var FireBall = function() {
    var fireBall = {};
    fireBall.__proto__ = BaseSpell();

    fireBall.depend = "INT";

    fireBall.start = function(caster, target){
       if(modifier == null){
          modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       if(utils.utils.isSuccess(alea, character[this.depend])<=0) {
           target.B --;
       }
    }
        

    return fireBall;
};


module.exports = FireBall;