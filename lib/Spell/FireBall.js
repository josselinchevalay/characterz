/* global require, module */
'use strict';

var BaseSpell = require('./BaseSpell.js');
var utils     = require('../Util/Util.js');

var FireBall = function() {
    var fireBall = {};
    fireBall.__proto__ = BaseSpell();

    fireBall.depend = 'IN';

    fireBall.start = function(caster, target, modifier){
       if(modifier === null){
          modifier = utils.MODIFIER.CASUAL;
       }
       var alea = utils.des(100) + modifier;
       if(utils.isSuccess(alea, caster[this.depend])<=0) {
           target.B --;
       }
    };
        

    return fireBall;
};


module.exports = FireBall;