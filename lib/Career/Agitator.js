'use strict';

var JdrBaseCareer   = require('./JdrBaseCareer.js');
var _               = require('undescore');


var Agitator = function() {
    var agitator = {};
    agitator.__proto__ = JdrBaseCareer();

    /**
    * define race accept
    */
    jdrBaseCareer.Races = ["nain", "elfe", "humain", "halfing"];

    /**
    * define outlet
    */
    jdrBaseCareer.Outlet = ["highwayman"];

    /**
    * define access
    */
    jdrBaseCareer.Access = ["quack"];

    /**
    * define capacity
    */
    jdrBaseCareer.Capacities = ["charism"];

    /**
    * define talent
    */
    jdrBaseCareer.Talents = ["street figth"];

    /**
    * define endowments
    */
    jdrBaseCareer.Endowments = [];

    /**
    * Authorize
    * @params object Character
    *
    * @return bool
    */
    jdrBaseCareer.authorize = function(character) {
        return _.find(this.Races, character.Race);
    };

    /**
    * affectTo
    * @param object Character
    */
    jdrBaseCareer.affectTo = function(character) {

    };

    return agitator;
};