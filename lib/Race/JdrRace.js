/* global require, module*/
'use strict';

var BaseRace = require('./BaseRace.js');
var utils    = require('../Util/Util.js');
var JdrRace = function(){
    var jdrRace = {};
    jdrRace.__proto__ = BaseRace();

    jdrRace.affectTo = function(character)
    {
        character.Race  = this.Race;
        character.CC    = this.CC   + (utils.des(70    -   this.CC)   +1); // max value 100
        character.CT    = this.CT   + (utils.des(70    -   this.CT)   +1); // max value 100
        character.E     = this.E    + (utils.des(70    -   this.E)    +1); // max value 100
        character.F     = this.F    + (utils.des(70    -   this.F)    +1); // max value 100
        character.AG    = this.AG   + (utils.des(70    -   this.AG)   +1); // max value 100
        character.IN    = this.IN   + (utils.des(70    -   this.IN)   +1); // max value 100
        character.FM    = this.FM   + (utils.des(70    -   this.FM)   +1); // max value 100
        character.SOC   = this.SOC  + (utils.des(70    -   this.SOC)  +1); // max value 100
        character.A     = this.A;
        character.B     = this.getBlow(); 
        character.BF    = Math.floor(character.F / 10);
        character.BE    = Math.floor(character.E / 10);
        character.M     = 5;
        character.XP    = 100;
    };

    jdrRace.getBlow = function(){
       /**/
    };

    return jdrRace;
};

module.exports = JdrRace;