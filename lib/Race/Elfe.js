/* global require, module */
'use strict';

var JdrRace = require('./JdrRace.js');
var utils    = require('../Util/Util.js');
var Elfe = function(){
    var elfe = {};
    elfe.__proto__ = JdrRace();

    elfe.Race   = 'elfe';
    elfe.CC     = 20;
    elfe.CT     = 30;
    elfe.E      = 20;
    elfe.F      = 20;
    elfe.AG     = 30;
    elfe.IN     = 20;
    elfe.FM     = 20;
    elfe.SOC    = 20;
    elfe.A      = 1;
    elfe.M      = 5; 

    elfe.getBlow = function(){
        var alea = utils.des(9) + 1;
        if(alea >= 1 && alea <= 3){
            return 9;
        }else if(alea >= 4 && alea <= 6 ){
            return 10;
        }else if(alea >= 7 && alea <= 9 ) {
            return 11;
        }
        return 12;
    };

    return elfe;
};

module.exports = Elfe;