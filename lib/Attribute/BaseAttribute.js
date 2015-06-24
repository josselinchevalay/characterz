'use strict';

var BaseAttribute = function(value, multiplier){
    var _baseValue = value;
    var _baseMultiplier = multiplier;

    /**
    * Define Propertie BaseValue gettable only
    */
     Object.defineProperty(this, "BaseValue", {
        get: function(){return _baseValue;},
        set: function(value){
        },
        enumerable: true,
        configurable: true
    });

     /**
    * Define Propertie BaseMultiplier gettable only
    */
     Object.defineProperty(this, "BaseMultiplier", {
        get: function(){return _baseMultiplier;},
        set: function(value){
        },
        enumerable: true,
        configurable: true
    });

};

module.exports = BaseAttribute;