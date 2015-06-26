'use strict';

var BaseAttribute = require('./BaseAttribute.js')
var _             = require('underscore');

var Attribute = function(startingValue){
    var attribute = {};
    startingValue  = startingValue || 0;
    var multiplier = 0;
    attribute.__proto__ = new BaseAttribute(startingValue, multiplier);

    /**
    * define finale value
    */
    attribute.startingValue = startingValue;
    attribute.calcul = 0;
    attribute._finalValue = attribute.BaseValue;

    /**
    * define RawBonuses
    */
    attribute._rawBonuses = [];

    attribute.addRawBonuses = function(bonus) {
        attribute._rawBonuses.push(bonus);
    }

    attribute.removeRawBonuses = function(bonus){
        attribute._rawBonuses = _.without(atttribute._rawBonuses, bonus);
    }

    /**
    * define FinalBonuses
    */
    attribute._finalBonuses = [];

    attribute.addFinalBonuses = function(bonus){
        attribute._finalBonuses.push(bonus)
    }

    attribute.removeFinalBonuses = function(bonus){
         attribute._finalBonuses = _.without(attribute._finalBonuses, bonus);
    }

    attribute.applyRawBonuses = function(){
        var rawBonusValue   = 0;
        var rawMultiplier   = 0.00;

        for (var raw in this._rawBonuses) {
            rawBonusValue += this._rawBonuses[raw].BaseValue;
            rawMultiplier += this._rawBonuses[raw].BaseMultiplier;
        };

        this.calcul += rawBonusValue * (1 + rawMultiplier);

    };

    attribute.applyFinalBonuses = function(){
        var finalMultiplier = 0.00;
        var finalBonusValue = 0;

        for( var finalBonus in this._finalBonuses) {
            finalBonusValue += this._finalBonuses[finalBonus].BaseValue;
            finalMultiplier += this._finalBonuses[finalBonus].BaseMultiplier;
        }
        
        this.calcul += finalBonusValue    * (1 + finalMultiplier);
    };

    attribute.calculateValue = function(){
        this.applyRawBonuses();
        this.applyFinalBonuses();
        this._finalValue = this.calcul;
        return this._finalValue;
    }

    attribute.FinalValue = function(){
        this.calcul = this.startingValue;
        return this.calculateValue();
    }

    return attribute;
}

 

module.exports = Attribute;