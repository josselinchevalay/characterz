/* jshint undef : true */
'use strict';
/**
* Attribute class
*/
/* global  module */
var Attribute = function(name, description, value){
    var _description = description;
    var _name = name;
    var _default = value;

    /**
    * Define Name
    */
    Object.defineProperty(this, 'Name', {
        get: function(){return _name;},
        set: function(value){
            _name = value;
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Define Description
    */
    Object.defineProperty(this, 'Description', {
        get: function(){return _description;},
        set: function(value){
            _description = value;
        },
        enumerable: true,
        configurable: true
    });

    /**
    * Define Value
    */
    Object.defineProperty(this, 'Value', {
        get: function(){return _default;},
        set: function(value){_default = value;},
        enumerable: true,
        configurable: true
    });
    
};

module.exports = Attribute;