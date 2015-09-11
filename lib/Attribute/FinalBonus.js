/*global require, module*/
'use strict';

var BaseAttribute = require('./BaseAttribute.js');

var FinalBonus = function(value, multiplier, timer){
    var finalBonus = {};
    value       = value || 0;
    multiplier  = multiplier || 0;
    timer       = timer || 10;
    finalBonus.__proto__ = new BaseAttribute(value, multiplier);

    /**
    * Define _parent
    */
    finalBonus._parent = null;

    /**
    * Define _timer
    */
    finalBonus._timer = timer;

    /**
    * define start
    */
    finalBonus.startTimer= function(attribute){
        var self = this;
        this._parent = attribute;
        this._parent.addFinalBonuses(this);
        setTimeout(function(){
            self.onTimerEnd();
        }, this._timer);
    };

    /**
    * define end
    */
    finalBonus.onTimerEnd = function(){
        this._parent.removeFinalBonuses(this);
    };

    return finalBonus;
};

 

module.exports = FinalBonus;