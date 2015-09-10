/* global require, module*/
'use strict';

var DependantAttribute = require('./DependantAttribute.js');
var _                  = require('underscore');

var Charateristic = function(startingValue){
    var charateristic = {};
    charateristic.__proto__ =  DependantAttribute(startingValue);
    
    charateristic.currentValue = charateristic.calculateValue();

    charateristic.getCurrentValue = function(){
        return this.currentValue;
    };

    charateristic.setCurrentValue = function(newValue){
        this.currentValue = newValue;
    };

    return charateristic;
};

module.exports = Charateristic;