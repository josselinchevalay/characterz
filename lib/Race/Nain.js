'use strict';

var JdrRace = require('./JdrRace.js');
var utils    = require('../Util/Util.js');
var Nain = function(){
    var nain = {};
    nain.__proto__ = JdrRace();

    nain.Race   = "nain";
    nain.CC     = 30;
    nain.CT     = 20;
    nain.E      = 20;
    nain.F      = 20;
    nain.AG     = 30;
    nain.IN     = 10;
    nain.FM     = 20;
    nain.SOC    = 10;
    nain.A      = 1;
    nain.M      = 5; 

    nain.getBlow = function(){
        var alea = utils.des(9) + 1;
        if(alea >= 1 && alea <= 3){
            return 9
        }else if(alea >= 4 && alea <= 6 ){
            return 10;
        }else if(alea >= 7 && alea <= 9 ) {
            return 11;
        }
        return 12;
    }

    return nain;
};

module.exports = Nain;