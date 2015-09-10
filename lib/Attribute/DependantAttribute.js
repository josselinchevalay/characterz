/* global require, module*/
'use strict';

var Attribute = require('./Attribute.js');
var _             = require('underscore');

var DependantAttribute = function(startingValue){
    var dependantAttribute = {};
    startingValue       = startingValue || 0;
    dependantAttribute.__proto__ = new Attribute(startingValue);


    /**
    * Define dependancies
    */
    dependantAttribute._dependencies = [];

    dependantAttribute.addDependency = function(attribute){
        this._dependencies.push(attribute);
    };

    dependantAttribute.removeDependency = function(attribute){
        this._dependencies = _.without(this._dependencies, attribute);
    };

    dependantAttribute.calculateValue = function(){
        this.applyRawBonuses();
        this.applyFinalBonuses();
        return this._finalValue;
    };

    return dependantAttribute;
};


module.exports = DependantAttribute;