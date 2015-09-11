/*global require, module*/
'use strict';

var JdrBaseCareer   = require('./JdrBaseCareer.js');
var utils           = require('../Util/Util.js');

var Apprentice = function() {
    var apprentice = {};
    apprentice.__proto__ = JdrBaseCareer();

    /**
    * define race accept
    */
    apprentice.Races = ['nain', 'elfe', 'human', 'halfing'];

    /**
    * define outlet
    */
    apprentice.Outlet = ['sorcer'];

    /**
    * define access
    */
    apprentice.Access = ['savant'];

    /**
    * define capacity
    */
    apprentice.Capacities = ['wizzard'];

    /**
    * define talent
    */
    apprentice.Talents = ['hand strong'];

    /**
    * define endowments
    */
    apprentice.Endowments = [];

    /**
    * affectTo
    * @param object Character
    */
    apprentice.affectTo = function(character) {
        if(!this.authorize(character)) {
            return;
        }

        if(!this.applyCost(character)){
            return;
        }         

        character.CC    = character.CC  + 5;
        character.AG    = character.AG  + 5;
        character.IN    = character.IN  + 10;
        character.FM    = character.FM  + 15;
        character.SOC   = character.SOC + 5;
        character.B     = character.B   + 2;
        character.MAG   = character.MAG + 1;  
        // select alea talents
        character.Talents.push(this.Talents[utils.des(this.Talents.length)]);
        // select alea capacities
        character.Capacities.push(this.Capacities[utils.des(this.Capacities.length)]);

        // save career
        character.Career = 'apprentice';
    };

    return apprentice;
};


module.exports = Apprentice;