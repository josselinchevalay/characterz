'use strict';

var BaseCareer = require('./BaseCareer.js')
var _               = require('underscore')
var utils           = require('../Util/Util.js')

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
        return _.find(this.Races, function(row){ return row == character.Race;});
    };

    /**
    * isNormal
    */
    jdrBaseCareer.isNormal = function(character) {
        if(character.Career == ""){
            return true;
        }

        if(_.find(this.outlet, function(row){return character.career;})) {
            return true;
        } else{
            return false;
        }
    };

    /**
    * applyCost
    */
    jdrBaseCareer.applyCost = function(character){
        if(this.isNormal(character)){
            character.XP = character.XP - 100;
            return true;
        }else if(character.XP >= 200 && !this.isNormal(character)){
            character.XP = -200
            console.log("cost : 200");
            return true;
        } else{
            console.log("nope");
            return false;
        }
    }

    /**
    * affectTo
    * @param object Character
    */
    jdrBaseCareer.affectTo = function(character) {

    };

    return jdrBaseCareer;
};

module.exports = JdrBaseCareer;