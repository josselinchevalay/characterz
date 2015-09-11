/*global require, module*/
'use strict';

var JdrBaseCareer   = require('./JdrBaseCareer.js');
var utils           = require('../Util/Util.js');

var CapacityService = require('../Services/CapacityService.js')();

var Agitator = function() {
    var agitator = {};
    agitator.__proto__ = JdrBaseCareer();

    /**
    * define race accept
    */
    agitator.Races = ['nain', 'elfe', 'human', 'halfing'];

    /**
    * define outlet
    */
    agitator.Outlet = ['highwayman'];

    /**
    * define access
    */
    agitator.Access = ['quack'];

    /**
    * define capacity
    */
    agitator.Capacities = {
        'Charism': CapacityService.get('Charism'),
        'Commerage': CapacityService.get('Commerage'),
        'Ragot': CapacityService.get('Ragot')
    };

    /**
    * define talent
    */
    agitator.Talents = ['street figth', 'cold blood', 'rhetoric', 'fuite'];

    /**
    * define endowments
    */
    agitator.Endowments = [];

    /**
    * affectTo
    * @param object Character
    */
    agitator.affectTo = function(character) {
        if(!this.authorize(character)) {
            return;
        }

        if(!this.applyCost(character)){
            return;
        }         

        character.CC    = character.CC  + 5;
        character.CT    = character.CT  + 5;
        character.AG    = character.AG  + 5;
        character.IN    = character.IN  + 10;
        character.SOC   = character.SOC + 10;
        character.B     = character.B   + 2;  
        // select alea talents
        character.Talents.push(this.Talents[utils.des(this.Talents.length)]);
        // select alea capacities
        character.Capacities = this.Capacities;

        // save career
        character.Career = 'agitator';
    };

    return agitator;
};


module.exports = Agitator;