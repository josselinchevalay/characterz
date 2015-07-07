'use strict';

var BaseCareer = require('./BaseCareer.js');

var JdrBaseCareer = function(){
    var jdrBaseCareer = {};
    jdrBaseCareer.__proto__ = BaseCareer();

    /**
    * define race accept
    */
    jdrBaseCareer.Races = [];

    /**
    * define outlet
    */
    jdrBaseCareer.Outlet = [];

    /**
    * define access
    */
    jdrBaseCareer.Access = [];

    /**
    * define capacity
    */
    jdrBaseCareer.Capacities = [];

    /**
    * define talent
    */
    jdrBaseCareer.Talents = [];

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

    };

    /**
    * affectTo
    * @param object Character
    */
    jdrBaseCareer.affectTo = function(character) {

    };

    return jdrBaseCareer;
};

module.exports = JdrBaseCareer;