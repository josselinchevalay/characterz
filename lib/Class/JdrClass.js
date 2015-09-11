/* global require, module */
'use strict';
/**
*
*/
var BaseClass = require('./BaseClass.js');
var _         = require('underscore');

var JdrClass = function(){

    var jdrClass = {};
    jdrClass.__proto__ = BaseClass();

    // assign all spells of class for all level
    jdrClass.grimmoire = {};
    
    jdrClass.affectTo = function(){
        
    };

    jdrClass.levelUp = function(character){
        var spells = _.find(this.grimmoire, {'level':character.Level});
        _.each(spells, function(spell){
            character.Grimmoire.push(spell);
        });
    };

    return jdrClass;
};


module.exports = JdrClass;