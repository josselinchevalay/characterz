'use strict';

var JdrRace = require('./JdrRace.js');
var utils    = require('../Util/Util.js');
var Human = function(){
    var human = {};
    human.__proto__ = JdrRace();

    human.Race   = "human";
    human.CC     = 20;
    human.CT     = 20;
    human.E      = 20;
    human.F      = 20;
    human.AG     = 20;
    human.IN     = 20;
    human.FM     = 20;
    human.SOC    = 20;
    human.A      = 1;
    human.M      = 4; 
       
    human.getBlow = function(){
        var alea = utils.des(9) + 1;
        if(alea >= 1 && alea <= 3){
            return 10
        }else if(alea >= 4 && alea <= 6 ){
            return 11;
        }else if(alea >= 7 && alea <= 9 ) {
            return 12;
        }
        return 13;
    }

    return human;
};

module.exports = Human;