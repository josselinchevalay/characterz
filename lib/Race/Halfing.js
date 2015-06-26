'use strict';

var JdrRace = require('./JdrRace.js');
var utils   = require('../Util/Util.js');
var Halfing = function(){
    var halfing = {};
    halfing.__proto__ = JdrRace();

    halfing.Race   = "halfing";
    halfing.CC     = 10;
    halfing.CT     = 30;
    halfing.E      = 10;
    halfing.F      = 10;
    halfing.AG     = 30;
    halfing.IN     = 20;
    halfing.FM     = 20;
    halfing.SOC    = 30;
    halfing.A      = 1;
    halfing.M      = 4; 

    halfing.getBlow = function(){
        var alea = utils.des(9) + 1;
        if(alea >= 1 && alea <= 3){
            return 8
        }else if(alea >= 4 && alea <= 6 ){
            return 9;
        }else if(alea >= 7 && alea <= 9 ) {
            return 10;
        }
        return 11;
    }

    return halfing;
};

module.exports = Halfing;